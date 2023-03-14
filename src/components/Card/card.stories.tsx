import { Button } from "../Button";
import { Table } from "../Table";
import { Card } from "./card";

export default {
    title: "Card",
    component: Card,
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

export const Default = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <Card style={{ flex: 1 }}>
                    <Table
                        data={mockData}
                        columns={mockColumns}
                        rowKey="id"
                        actionContent={
                            <>
                                <Button type="primary" mode="create">
                                    Hi
                                </Button>
                            </>
                        }
                    />
                </Card>
            </div>
        </>
    );
};
