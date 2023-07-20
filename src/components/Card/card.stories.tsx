import { Button } from "../Button";
import { Table } from "../Table";
import { Typography } from "../Typography";
import { Card, InfoCard } from "./card";

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
                        dataSource={mockData}
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

export const InfoExample = () => {
    return (
        <InfoCard
            icon={
                "https://images.getrecipekit.com/20210919052613-breakfast-toast-topper-1030x687.jpg?width=650&quality=90&"
            }
            infoTitle={<div>Hello world</div>}
            information={
                <>
                    <Typography>Supplier Code: LFX-HK-DIV-0001</Typography>
                </>
            }
            tags={["Agent", "Supplier", "Haha", "Supply chain and node type"]}
        ></InfoCard>
    );
};
