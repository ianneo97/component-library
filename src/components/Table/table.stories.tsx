import { Table } from "./table";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Table",
    component: Table,
};

const mockData = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 21 },
];

const mockColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
];

export const TableWithData = () => (
    <Table data={mockData} columns={mockColumns} rowKey="id" />
);

export const EmptyTable = () => (
    <Table data={[]} columns={mockColumns} rowKey="id" />
);
