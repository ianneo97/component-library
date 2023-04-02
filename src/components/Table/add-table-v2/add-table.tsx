import { DeleteOutlined } from "@ant-design/icons";
import { Table as AntdTable, TableProps as AntdTableProps } from "antd";
import { useCallback, useMemo, useState } from "react";
import { Button } from "../../Button";
import { Card } from "../../Card";
import { Form, FormItem, useForm } from "../../Form";
import { Input } from "../../Input";
import { Modal } from "../../Modal";
import "./add-table.css";
import { Select } from "../../Select";
// import { Modal } from "../../Modal";

export interface TableProps<T = any> extends AntdTableProps<T> {
    columns: AntdTableProps<T>["columns"];
    dataSource: T[];
    setDataSource: (data: T[]) => void;
    cardTitle: string;
}

const AddTable: React.FC<TableProps> = (props) => {
    const { columns, dataSource, setDataSource, ...rest } = props;
    const [form] = useForm();
    const [addMode, setAddMode] = useState(false);

    const reset = () => {
        form.resetFields();
        setAddMode(false);
    };

    const submitForm = () => {
        const values = form.getFieldsValue(true);
        setDataSource([...dataSource, values]);

        reset();
    };

    const onChange = useCallback(
        (value: any, index: number, dataIndex: string) => {
            dataSource[index][dataIndex] = value;

            setDataSource(dataSource.map((x: any) => x));
        },
        [dataSource, setDataSource]
    );

    const memoizedColumns = useMemo(
        () => [
            ...(props.columns || []).map((x: any) => {
                return {
                    ...x,
                    render: (text: string, record: any, index: number) => {
                        const Component = x.component;
                        const filteredOptions = x.options?.filter(
                            (opt: any) =>
                                !dataSource.some(
                                    (arg: any) => arg[x.dataIndex] === opt.value
                                )
                        );

                        return Component ? (
                            <Component
                                onChange={(value: any) =>
                                    onChange(value, index, x.dataIndex)
                                }
                                options={filteredOptions}
                                value={
                                    x.mode === "tags"
                                        ? record[x.dataIndex]
                                        : record[x.dataIndex]
                                }
                                mode={x.mode}
                                getPopupContainer={(trigger: any) =>
                                    trigger.parentElement
                                }
                            />
                        ) : (
                            <Input
                                value={record[x.dataIndex]}
                                onChange={(value) =>
                                    onChange(
                                        value.target.value,
                                        index,
                                        x.dataIndex
                                    )
                                }
                            />
                        );
                    },
                };
            }),
            {
                title: "Actions",
                dataIndex: "actions",
                render: (text: any, data: any, index: number) => {
                    return (
                        <Button mode="borderless" onClick={() => {}}>
                            <DeleteOutlined />
                        </Button>
                    );
                },
            },
        ],
        [props.columns, onChange, dataSource]
    );

    return (
        <>
            <Modal open>
                <AntdTable
                    {...rest}
                    dataSource={dataSource}
                    columns={memoizedColumns}
                    footer={() => (
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "8px",
                                }}
                            >
                                <Button
                                    mode="borderless"
                                    onClick={() => setAddMode(true)}
                                >
                                    Add New{" "}
                                </Button>
                            </div>
                        </>
                    )}
                />

                {addMode ? (
                    <>
                        <Card title={props.cardTitle}>
                            <Form form={form}>
                                {memoizedColumns
                                    .filter(
                                        (column) =>
                                            column.dataIndex !== "actions"
                                    )
                                    .map((x: any, index) => {
                                        const Component = x.component;
                                        const filteredOptions =
                                            x.options?.filter(
                                                (opt: any) =>
                                                    !dataSource.some(
                                                        (arg: any) =>
                                                            arg[x.dataIndex] ===
                                                            opt.value
                                                    )
                                            );

                                        return (
                                            <>
                                                <FormItem
                                                    label={x.title}
                                                    name={x.dataIndex}
                                                    key={x.dataIndex}
                                                    style={{
                                                        position: "relative",
                                                    }}
                                                >
                                                    {/* {Component ? (
                                                        <Component
                                                            mode={x.mode}
                                                            options={
                                                                filteredOptions ||
                                                                []
                                                            }
                                                        />
                                                    ) : (
                                                        <Input />

                                                    )} */}
                                                    <div
                                                        style={{
                                                            position:
                                                                "relative",
                                                        }}
                                                        id={`select-${index}`}
                                                    ></div>
                                                </FormItem>
                                                <Select
                                                    getPopupContainer={(
                                                        trigger
                                                    ) => trigger.parentNode}
                                                    // getPopupContainer={() =>
                                                    //     document.getElementById(
                                                    //         `select-${index}`
                                                    //     ) ||
                                                    //     document.body
                                                    // }
                                                    options={[
                                                        {
                                                            label: "TEST",
                                                            value: "test",
                                                        },
                                                        {
                                                            label: "TEST123",
                                                            value: "test1",
                                                        },
                                                        {
                                                            label: "TEST@",
                                                            value: "test2",
                                                        },
                                                    ]}
                                                />
                                            </>
                                        );
                                    })}
                            </Form>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "8px",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Button mode="delete" onClick={reset}>
                                    Cancel
                                </Button>

                                <Button mode="create" onClick={submitForm}>
                                    Submit
                                </Button>
                            </div>
                        </Card>
                    </>
                ) : null}
            </Modal>
        </>
    );
};

export { AddTable as AddTableV2 };
export type { TableProps as AddTableV2Props };
