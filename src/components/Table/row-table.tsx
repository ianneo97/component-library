import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Form, FormItem, useForm } from "../Form";
import { Input } from "../Input";
import { InputNumber } from "../InputNumber";
import { Select } from "../Select";
import { Link } from "../Typography";
import "./add-table.css";
import { TableProps } from "./table";

interface Item {
    key: string;
    name?: string;
    age?: number;
    address?: string;
    isAdded?: boolean;
}

const originData: Item[] = [];
for (let i = 0; i < 2; i++) {
    originData.push({
        key: i.toString(),
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: "number" | "text" | "select";
    record: Item;
    index: number;
    options?: any[];
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    options,
    children,
    ...restProps
}) => {
    let inputNode;

    if (inputType === "number") inputNode = <InputNumber />;
    if (inputType === "select") inputNode = <Select options={options} />;
    if (inputType === "text" || !inputType) inputNode = <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <FormItem
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </FormItem>
            ) : (
                children
            )}
        </td>
    );
};

export interface AddTableProps {
    columns: TableProps<any>["columns"];
    data: any[];
    setData: (arg: any) => void;
    addCardTitle: string;
}

const AddTable: React.FC<AddTableProps> = ({
    columns,
    data,
    setData,
    addCardTitle,
}) => {
    const [form] = useForm();
    const [addForm] = useForm();
    const [editingKey, setEditingKey] = useState("");
    const [isAdd, setIsAdd] = useState(false);

    const isEditing = useMemo(
        () => (record: Item) => record.key === editingKey,
        [editingKey]
    );

    const edit = useCallback(
        (record: Partial<Item> & { key: React.Key }) => {
            form.setFieldsValue({ name: "", age: "", address: "", ...record });
            setEditingKey(record.key);
        },
        [form, setEditingKey]
    );

    const cancel = useCallback(() => {
        const values = form.getFieldsValue(true);
        const isAdded = values.isAdded;

        if (isAdded) setData(data.filter((item) => item.key !== editingKey));
        setEditingKey("");
    }, [data, editingKey, form, setData, setEditingKey]);

    const save = useCallback(
        async (key: React.Key) => {
            try {
                const row = (await form.validateFields()) as Item;

                const newData = [...data];
                const index = newData.findIndex((item) => key === item.key);

                if (index > -1) {
                    const item = newData[index];
                    newData.splice(index, 1, {
                        ...item,
                        ...row,
                    });

                    setData(newData);
                    setEditingKey("");
                } else {
                    newData.push(row);

                    setData(newData);
                    setEditingKey("");
                }
            } catch (errInfo) {
                console.log("Validate Failed:", errInfo);
            } finally {
                form.resetFields();
            }
        },
        [data, form, setData]
    );

    const handleAdd = () => {
        if (isAdd) add();

        setIsAdd(isAdd ? false : true);
    };

    const add = async () => {
        const values = addForm.getFieldsValue(true);
        if (Object.entries(values).every(([key, value]) => !value)) return;

        await form.validateFields();

        setData([...data, { key: data.length.toString(), ...values }]);
        addForm.resetFields();
    };

    const memoizedColumns = React.useMemo(
        () => [
            ...(columns || []),
            {
                title: "Actions",
                dataIndex: "operation",
                width: "10%",
                render: (_: any, record: Item) => {
                    const editable = isEditing(record);

                    return editable ? (
                        <span>
                            <Link
                                onClick={() => save(record.key)}
                                style={{ marginRight: 8 }}
                            >
                                <CheckOutlined />
                            </Link>
                            <Link onClick={() => cancel()}>
                                <CloseOutlined />
                            </Link>
                        </span>
                    ) : (
                        <Link
                            disabled={editingKey !== ""}
                            onClick={() => edit(record)}
                        >
                            <EditOutlined />
                        </Link>
                    );
                },
            },
        ],
        [columns, cancel, edit, save, editingKey, isEditing]
    );

    const mergedColumns = memoizedColumns.map((col: any) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.inputType || "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
                options: col.options,
            }),
        };
    });

    return (
        <>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered={false}
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    className="lfx-add-table"
                    pagination={false}
                />
            </Form>

            <Card
                title={addCardTitle}
                hidden={!isAdd}
                className="lfx-add-table-card"
            >
                <Form form={addForm}>
                    {memoizedColumns
                        .filter((x) => x.title !== "Actions")
                        .map((col: any) => {
                            return (
                                <>
                                    <FormItem
                                        label={col.title}
                                        name={col.dataIndex}
                                    >
                                        {col.component ? (
                                            col.component
                                        ) : (
                                            <Input />
                                        )}
                                    </FormItem>
                                </>
                            );
                        })}
                </Form>
            </Card>

            <Button mode="borderless" onClick={handleAdd} type="primary">
                Add a row
            </Button>
        </>
    );
};

export { AddTable };
