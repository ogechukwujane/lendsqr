import { Dropdown, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useMemo, useState } from "react";
import type { TableColumnType } from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";
import { FilterIcon, MenuIcon } from "../../assets";
import { ButtonComp, InputComp } from "../../components";
import styles from "../../styles/pages/userTable.module.scss";
import { useGetUsersQuery } from "../../api";
import { useNavigate } from "react-router";
import moment from "moment";

interface DataType {
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  userStatus: string;
}

export const UserTable: React.FC = () => {
  const { data, isLoading } = useGetUsersQuery();
  const [pageSize, setPageSize] = useState(20);
  const [organisation, setOrganisation] =
    useState<{ value: string; label: string }[]>();
  const navigate = useNavigate();

  const statusData = [
    { value: "Inactive", label: "Inactive" },
    { value: "Pending", label: "Pending" },
    { value: "Blacklisted", label: "Blacklisted" },
    { value: "Active", label: "Active" },
  ];

  useEffect(() => {
    if (data) {
      const organisations = data.map((user) => {
        return {
          value: user.organisation,
          label: user.organisation,
        };
      });
      setOrganisation(organisations);
    }
  }, [data]);

  const dataSource = useMemo(() => {
    return (
      data?.map((user) => ({
        action: user,
        organization: user.organisation,
        username: user.fullName,
        email: user.email,
        phone: user.phone,
        date: moment(user.createdAt).format("MMM DD, YYYY hh:mmA"),
        userStatus: user.status,
      })) ?? []
    );
  }, [data]);

  const handleFilter = () => {};

  const getFilterResult = (): TableColumnType<DataType> => ({
    filterDropdown: ({ close }) => (
      <div className={styles.UserTable} onKeyDown={(e) => e.stopPropagation()}>
        <div className={styles.filter_content_wrap}>
          <div className={styles.box}>
            <label className={styles.label}>Organisation</label>
            <Select
              className={styles.select}
              defaultValue="organization"
              allowClear
              options={organisation}
            />
          </div>
          <InputComp label="Username" placeholder="User" />
          <InputComp label="Email" placeholder="Email" />
          <div className={styles.box}>
            <label className={styles.label}>Date</label>
            <DatePicker className={styles.date} />
          </div>
          <InputComp label="Phone Number" placeholder="Phone Number" />
          <div className={styles.box}>
            <label className={styles.label}>Status</label>
            <Select
              className={styles.select}
              defaultValue="Status"
              allowClear
              options={statusData}
            />
          </div>
          <div className={styles.button_flex}>
            <ButtonComp
              className={styles.reset_button}
              text="Rest"
              onClick={() => close()}
            />
            <ButtonComp text="Filter" onClick={() => handleFilter()} />
          </div>
        </div>
      </div>
    ),
    filterIcon: () => <FilterIcon />,
    onFilter: (value, record) =>
      record
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "ORGANIZATION",
      dataIndex: "organization",
      key: "organization",
      ...getFilterResult(),
    },
    {
      title: "USERNAME",
      dataIndex: "username",
      key: "username",
      ...getFilterResult(),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      ...getFilterResult(),
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phone",
      key: "phone",
      ...getFilterResult(),
    },
    {
      title: "DATE JOINED",
      dataIndex: "date",
      key: "date",
      ...getFilterResult(),
    },
    {
      title: "STATUS",
      dataIndex: "userStatus",
      key: "userStatus",
      ...getFilterResult(),
      render: (value: string) => (
        <div
          className={`${styles.statusIndicator} ${styles[value.toLowerCase()]}`}
        >
          {value}
        </div>
      ),
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      render: (value) => (
        <Dropdown
          menu={{
            items: [
              {
                key: 1,
                label: <p>View</p>,
                onClick: () =>
                  navigate(`view/${value.userId}`, { state: { value } }),
              },
            ],
          }}
        >
          <button className={styles.dropdown_button}>
            <MenuIcon />
          </button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className={styles.table_wrap}>
      <Table
        className={styles.table}
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        pagination={{
          defaultCurrent: 1,
          showSizeChanger: true,
          onShowSizeChange: (_current, size) => {
            setPageSize(size);
          },
          total: data?.length ?? 0,
          pageSize: pageSize,
        }}
      />
    </div>
  );
};
