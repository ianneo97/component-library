import { ColumnsType, Table } from ".";
import { Button } from "../Button";
import { Tooltip } from "../Tooltip";
import { Link } from "../Typography";

export default {
    title: "Atoms/Table",
};

export const Default = () => {
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataSource} rowKey={"key"} />
        </>
    );
};

export const FixedHeaderTable = () => {
    interface DataType {
        key: React.Key;
        name: string;
        age: number;
        address: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            width: 150,
        },
        {
            title: "Age",
            dataIndex: "age",
            width: 150,
        },
        {
            title: "Address",
            dataIndex: "address",
        },
    ];

    const data: DataType[] = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            key="key"
        />
    );
};

export const FixedColumnTable = () => {
    interface DataType {
        key: React.Key;
        // name: string;
        mock: {
            name: string;
        };
        age: number;
        address: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: "Full Name",
            width: 100,
            dataIndex: ["mock", "name"],
            key: "mock.name",
            ellipsis: {
                showTitle: false,
            },
            render: (name: string) => <Tooltip title={name}>{name}</Tooltip>,
        },
        {
            title: "Age",
            width: 100,
            dataIndex: "age",
            key: "age",
            ellipsis: true,
        },
        { title: "Column 1", dataIndex: "address", key: "1" },
        { title: "Column 2", dataIndex: "address", key: "2" },
        { title: "Column 3", dataIndex: "address", key: "3" },
        { title: "Column 4", dataIndex: "address", key: "4" },
        { title: "Column 5", dataIndex: "address", key: "5" },
        { title: "Column 6", dataIndex: "address", key: "6" },
        { title: "Column 7", dataIndex: "address", key: "7" },
        { title: "Column 8", dataIndex: "address", key: "8" },
        {
            title: "Actions",
            key: "operation",
            fixed: "right",
            width: 100,
            render: () => <Link>Action</Link>,
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            mock: {
                name: "John",
            },
            age: 32,
            address: "New York Park",
        },
        {
            key: "2",
            mock: {
                name: "Jim Green",
            },
            age: 40,
            address: "London Park",
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            // pagination={{ pageSize: 50 }}
            scroll={{ x: "max-content" }}
            actions={
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button>Hello world</Button>
                    <Button>Hello world</Button>
                </div>
            }
            key="key"
        />
    );
};
