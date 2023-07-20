import { DeleteOutlined } from "@ant-design/icons";
import { Table as AntdTable, TableProps as AntdTableProps } from "antd";
import { useCallback, useMemo, useState } from "react";
import { Button } from "../../Button";
import { Card } from "../../Card";
import { Form, FormItem, useForm } from "../../Form";
import { Input } from "../../Input";
import "./add-table.css";
import { Checkbox } from "../../Checkbox";

export interface TableProps<T = any> extends AntdTableProps<T> {
    columns: AntdTableProps<T>["columns"];
    dataSource: T[];
    setDataSource: (data: T[]) => void;
    cardTitle: string;
    addable?: boolean;
    deletable?: boolean;
}

const AddTable: React.FC<TableProps> = (props) => {
    const { columns, dataSource, setDataSource, ...rest } = props;
    const [form] = useForm();
    const [addMode, setAddMode] = useState(false);
    const defaultRules = [
        {
            required: true,
            message: "This field is required",
        },
    ];

    const reset = () => {
        form.resetFields();
        setAddMode(false);
    };

    const submitForm = async () => {
        try {
            await form.validateFields();

            const values = form.getFieldsValue(true);
            setDataSource([...dataSource, values]);

            reset();
        } catch (error) {
            return;
        }
    };

    const onChange = useCallback(
        (value: any, index: number, dataIndex: string) => {
            dataSource[index][dataIndex] = value;

            setDataSource(dataSource.map((x: any) => x));
        },
        [dataSource, setDataSource]
    );

    const handleChange = useCallback(
        (value: any, index: number, dataIndex: string, component: any) => {
            if (component === Checkbox) {
                onChange(value.target.checked, index, dataIndex);
            } else {
                onChange(value, index, dataIndex);
            }
        },
        [onChange]
    );

    const memoizedColumns = useMemo(() => {
        const columns = [
            ...(props.columns || []).map((x: any) => {
                return {
                    ...x,
                    render: (text: string, record: any, index: number) => {
                        const Component = x.component;

                        if (x.hideFn && x.hideFn(record, x.hideParams)) {
                            return null;
                        }

                        return Component ? (
                            <Component
                                onChange={(value: any) =>
                                    handleChange(
                                        value,
                                        index,
                                        x.dataIndex,
                                        x.component
                                    )
                                }
                                options={x.options}
                                value={
                                    x.mode === "tags"
                                        ? record[x.dataIndex]
                                        : record[x.dataIndex]
                                }
                                checked={record[x.dataIndex]}
                                mode={x.mode}
                                placement="bottomLeft"
                            />
                        ) : x.disabled ? (
                            record[x.dataIndex]
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
        ];

        if (props.deletable) {
            columns.push({
                title: "Actions",
                dataIndex: "actions",
                render: (text: any, data: any, index: number) => {
                    return (
                        <Button mode="borderless" onClick={() => {}}>
                            <DeleteOutlined />
                        </Button>
                    );
                },
            });
        }

        return columns;
    }, [props.columns, onChange, handleChange, props.deletable]);

    return (
        <>
            <AntdTable
                {...rest}
                dataSource={dataSource}
                columns={memoizedColumns}
                footer={
                    !props.addable
                        ? undefined
                        : () => (
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
                          )
                }
            />

            {addMode && props.addable ? (
                <>
                    <Card
                        title={props.cardTitle}
                        bodyStyle={{ height: "100%" }}
                    >
                        <Form form={form} style={{ overflow: "unset" }}>
                            {memoizedColumns
                                .filter(
                                    (column) => column.dataIndex !== "actions"
                                )
                                .map((x: any, index) => {
                                    const Component = x.component;
                                    const filteredOptions = x.options?.filter(
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
                                                required={x.required ?? true}
                                                rules={
                                                    x.required
                                                        ? [
                                                              ...defaultRules,
                                                              ...(x.rules ||
                                                                  []),
                                                          ]
                                                        : [...x.rules]
                                                }
                                            >
                                                {Component ? (
                                                    <Component
                                                        mode={x.mode}
                                                        options={
                                                            x.skipFilter
                                                                ? x.options
                                                                : filteredOptions
                                                            // filteredOptions ||
                                                            // []
                                                        }
                                                        placement="bottomLeft"
                                                        onChange={x.onChange}
                                                    />
                                                ) : (
                                                    <Input />
                                                )}
                                            </FormItem>
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
        </>
    );
};

export { AddTable as AddTableV2 };
export type { TableProps as AddTableV2Props };
