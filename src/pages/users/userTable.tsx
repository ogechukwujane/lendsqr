import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";
import type { TableColumnType } from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";
import { FilterIcon } from "../../assets";
import { ButtonComp, InputComp } from "../../components";
import styles from "../../styles/pages/userTable.module.scss";
import { useGetUsersQuery } from "../../api";

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
  const [pageSize, setPageSize] = useState(50);

  console.log("dddd", data);

  const dataSource = useMemo(() => {
    return (
      data?.users.map((user) => ({
        organization: user.organisation,
        username: user.fullName,
        email: user.email,
        phone: user.phone,
        date: user.createdAt,
        userStatus: user.status,
      })) ?? []
    );
  }, [data?.users]);

  const getFilterResult = (): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, confirm, close }) => (
      <div
        className={styles.UserTable}
        style={{ padding: 8 }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div className={styles.filter_content_wrap}>
          <div className={styles.box}>
            <label className={styles.label}>Organisation</label>
            <Select
              className={styles.select}
              defaultValue="lucy"
              allowClear
              options={[
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
              onChange={(value) => setSelectedKeys(value ? [value] : [])}
            />
          </div>
          <InputComp
            label="Username"
            placeholder="User"
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
          />
          <InputComp
            label="Email"
            placeholder="Email"
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
          />
          <div className={styles.box}>
            <label className={styles.label}>Date</label>
            <DatePicker
              className={styles.date}
              onChange={(__, dateString) =>
                setSelectedKeys(dateString ? [dateString] : [])
              }
            />
          </div>
          <InputComp
            label="Phone Number"
            placeholder="Phone Number"
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
          />
          <div className={styles.box}>
            <label className={styles.label}>Status</label>
            <Select
              className={styles.select}
              defaultValue="Status"
              allowClear
              options={[
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
              onChange={(value) => setSelectedKeys(value ? [value] : [])}
            />
          </div>
          <div className={styles.button_flex}>
            <ButtonComp
              className={styles.reset_button}
              text="Rest"
              onClick={() => close()}
            />
            <ButtonComp
              text="Filter"
              onClick={() => {
                confirm({ closeDropdown: false });
              }}
            />
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
      // render: (_: unknown, banner: IHeroSection) => (
      //   <StatusTag status={banner.bannerStatus.toLowerCase()}>
      //     {banner.bannerStatus}
      //   </StatusTag>
      // ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
      pagination={{
        defaultCurrent: 1,
        showSizeChanger: true,
        onShowSizeChange: (_current, size) => {
          setPageSize(size);
        },
        total: data?.users?.length ?? 0,
        pageSize: pageSize,
      }}
    />
  );
};
