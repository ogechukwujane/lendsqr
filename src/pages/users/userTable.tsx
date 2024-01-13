import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue } from "antd/es/table/interface";
import { useState } from "react";
import type { TableColumnType } from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";
import { FilterIcon } from "../../assets";
import { ButtonComp, InputComp } from "../../components";
import styles from "../../styles/pages/userTable.module.scss";

interface DataType {
  name: string;
  key: string;
  age: number;
  address: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

export const UserTable: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

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
      ...getFilterResult(),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      ...getFilterResult(),
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phone",
      ...getFilterResult(),
    },
    {
      title: "DATE JOINED",
      dataIndex: "date",
      ...getFilterResult(),
    },
    {
      title: "Status",
      dataIndex: "date",
      ...getFilterResult(),
    },
  ];

  return (
    <Table
      columns={columns}
      //   dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      //   onChange={handleTableChange}
    />
  );
};
