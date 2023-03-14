import { Button } from "../Button";
import { Table } from "./table";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Table",
    component: Table,
};

const mockData = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Ane", age: 22 },
];

const mockColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
];

export const TableWithData = () => (
    <Table
        data={mockData}
        columns={mockColumns}
        rowKey="id"
        actionContent={
            <>
                <Button type="primary">Hi</Button>
            </>
        }
    />
);

export const EmptyTable = () => (
    <Table data={[]} columns={mockColumns} rowKey="id" />
);
