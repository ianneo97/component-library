import { CloseOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Table, TableProps } from "antd";
import { useMemo, useState } from "react";
import { Button } from "../../Button";
import { Card } from "../../Card";
import { Form, FormItem } from "../../Form";
import { FormInstance, FormList } from "../../Form/form";
import { Input } from "../../Input";
import "./add-table-v2.css";
import "./add-table.css";

export interface AddTableProps extends TableProps<any> {
    form: FormInstance;
    cardForm: FormInstance;
    columns: TableProps<any>["columns"];
    cardTitle: string;
    addButtonText: string;
}

const AddTable: React.FC<AddTableProps> = ({
    form,
    cardForm,
    columns,
    cardTitle,
    addButtonText,
}) => {
    const [addMode, setAddMode] = useState(false);

    const memoizedColumns = useMemo(
        () => [
            ...(columns || []).map((column: any) => ({
                ...column,
                render: (text: string, record: any, index: number) => {
                    return (
                        <FormItem
                            label={record.title}
                            name={[index, ...column.dataIndex.split(".")]}
                            key={column.dataIndex}
                        >
                            {column.component ? column.component : <Input />}
                        </FormItem>
                    );
                },
            })),
            {
                title: "Action",
                dataIndex: "action",
                render: (text: string, record: any, index: number) => {
                    return (
                        <Button
                            mode="borderless"
                            onClick={() => {
                                const fields = form.getFieldsValue(true);
                                fields.items = fields.items ? fields.items : [];
                                fields.items.splice(index, 1);
                                form.setFieldsValue(fields);
                            }}
                        >
                            <DeleteOutlined />
                        </Button>
                    );
                },
            },
        ],
        [columns, form]
    );

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >
                <Form form={form} layout="vertical">
                    <FormList name="items">
                        {(fields) => (
                            <>
                                <Table
                                    dataSource={fields}
                                    columns={memoizedColumns}
                                    pagination={false}
                                    className="lfx-add-table"
                                    rowClassName="editable-row"
                                    rowKey={(record) => record.key}
                                    scroll={{ x: "max-content" }}
                                />
                            </>
                        )}
                    </FormList>
                </Form>

                <Card
                    title={cardTitle}
                    hidden={!addMode}
                    className="lfx-add-table-card"
                >
                    <Form form={cardForm}>
                        {memoizedColumns
                            .filter((column) => column.dataIndex !== "action")
                            .map((column: any) => {
                                return (
                                    <>
                                        <FormItem
                                            label={column.title}
                                            name={column.dataIndex}
                                            key={column.dataIndex}
                                        >
                                            {column.component ? (
                                                column.component
                                            ) : (
                                                <Input />
                                            )}
                                        </FormItem>
                                    </>
                                );
                            })}
                    </Form>
                </Card>

                <div style={{ display: "flex" }}>
                    <Button
                        mode="borderless"
                        type="primary"
                        onClick={async () => {
                            try {
                                if (!addMode) {
                                    setAddMode(true);
                                    return;
                                }

                                const currentItem =
                                    cardForm.getFieldsValue(true);
                                if (Object.values(currentItem).every((x) => !x))
                                    return;

                                await cardForm.validateFields();

                                const fields = form.getFieldsValue(true);
                                fields.items = fields.items ? fields.items : [];
                                fields.items.push(currentItem);

                                setAddMode(false);
                                cardForm.resetFields();
                            } catch (err) {
                                console.error(err);
                            }
                        }}
                    >
                        <PlusOutlined />
                        {addButtonText}
                    </Button>

                    {addMode ? (
                        <Button
                            mode="borderless"
                            type="primary"
                            hidden={addMode}
                            onClick={() => setAddMode(false)}
                        >
                            <CloseOutlined />
                            Cancel
                        </Button>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export { AddTable };
