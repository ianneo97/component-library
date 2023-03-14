import { Button } from "../Button";
import { Table } from "./table";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Table",
    component: Table,
};

const mockData = [
    {
        id: 1,
        name: {
            locales: [{ text: "John", localeName: "en" }],
        },
        age: 20,
    },
    {
        id: 2,
        name: {
            locales: [{ text: "Mary", localeName: "en" }],
        },
        age: 22,
    },
];

const mockColumns = [
    { title: "ID", dataIndex: "id" },
    {
        title: "Name",
        render: (value: any) => value.name.locales[0].text,
    },
    { title: "Age", dataIndex: "age" },
    { title: "Actions", dataIndex: "actions" },
];

export const TableWithData = () => (
    <Table
        data={mockData}
        columns={mockColumns}
        rowKey="id"
        actionContent={
            <>
                <Button mode="create">Hi</Button>
            </>
        }
    />
);

export const EmptyTable = () => (
    <Table data={[]} columns={mockColumns} rowKey="id" />
);
