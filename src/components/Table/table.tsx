import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import {
    Checkbox,
    Form,
    Input,
    Popover,
    Table as AntdTable,
    TableProps as AntdTableProps,
    Typography,
} from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { TablePaginationConfig } from "antd/es/table";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../Button";
import { Select } from "../Select";
import "./table.css";

export interface TableProps<T = any> extends AntdTableProps<T> {
    actionContent?: React.ReactNode;
}

const Table: React.FC<TableProps> = (props) => {
    const [form] = Form.useForm();
    const [filterValue, setFilterValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState(props.dataSource);
    const [filteredCols, setFilteredCols] = useState(props.columns);
    const [checked, setChecked] = useState(true);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<
        CheckboxValueType[]
    >(props.columns?.map((x) => x.title?.toString() || "") || []);

    const columns = useMemo(
        () => props.columns?.filter((x) => x.title !== "Actions") || [],
        // () => props.columns || [],
        [props.columns]
    );

    const conditions = [
        { label: "Contains", value: "contains" },
        { label: "Equals", value: "equals" },
    ];

    const onSearch = useCallback(() => {
        const content = props.dataSource?.filter((item) =>
            Object.values(item).some((value) =>
                JSON.stringify(value)
                    .toLocaleLowerCase()
                    .includes(filterValue.toLocaleLowerCase())
            )
        );

        setFilteredData(content);
    }, [filterValue, props.dataSource]);

    const onSubmit = async () => {
        await form.validateFields();

        const values = form.getFieldsValue(true);

        switch (values.condition) {
            case "contains":
                const newVal = props.dataSource?.filter((obj) => {
                    // If user didn't input a value, will return true to sort of reset the list.
                    if (!values.value) return true;

                    const propertyNames = values.name.split(".");
                    const value = propertyNames.reduce(
                        (acc: any, curr: any) => {
                            return acc && acc[curr];
                        },
                        obj
                    );

                    // If the value exists and user inputted a value, will check against the logic.
                    return values.value && value
                        ? JSON.stringify(value)
                              .toLowerCase()
                              .includes(values.value.toLowerCase())
                        : false; // Default will be false.
                });

                return setFilteredData(newVal);
            case "equals":
                return setFilteredData(
                    props.dataSource?.filter(
                        (x) => JSON.stringify(x[values.name]) === values.value
                    )
                );
            default:
                return setFilteredData(props.dataSource);
        }
    };

    const onGroupChange = (list: CheckboxValueType[]) => {
        setSelectedCheckboxes(list);
        setChecked(list.length === columns.length);
        setFilteredCols(
            props.columns?.filter((x) => {
                if (x.title?.toString() === "Actions") return true;

                return list.includes(x.title?.toString() || "");
            })
        );
    };

    const onCheckAll = (e: CheckboxChangeEvent) => {
        setChecked(e.target.checked);
        setSelectedCheckboxes(
            e.target.checked
                ? columns.map((x) => x.title?.toString() || "")
                : []
        );
        setFilteredCols(
            e.target.checked
                ? props.columns
                : props.columns?.filter(
                      (x) => x.title?.toString() === "Actions"
                  )
        );
    };

    useEffect(() => {
        setFilteredCols(props.columns);
        setFilteredData(props.dataSource);
    }, [props.columns, props.dataSource]);

    return (
        <>
            <div className="flex-table-container">
                <div className="flex-table-controls-wrapper">
                    <div className="flex-table-control-container">
                        <Input
                            placeholder="Search"
                            onPressEnter={onSearch}
                            onKeyUp={onSearch}
                            onChange={(e) => setFilterValue(e.target.value)}
                            addonAfter={<SearchOutlined />}
                        />

                        <div className="flex-table-control-filter flex-select-filter">
                            <Typography>Columns:</Typography>

                            <Select
                                className="flex-table-control-filter-select"
                                value={selectedCheckboxes
                                    .filter((x) => x !== "Actions")
                                    .join(", ")}
                                dropdownRender={() => (
                                    <>
                                        <div>
                                            <Checkbox
                                                className="lfx-table-checkbox"
                                                checked={checked}
                                                onChange={(e) => onCheckAll(e)}
                                            >
                                                All
                                            </Checkbox>

                                            <Checkbox.Group
                                                onChange={(e) =>
                                                    onGroupChange(e)
                                                }
                                                className="lfx-table-checkbox-group"
                                                value={selectedCheckboxes}
                                                options={
                                                    columns
                                                        ? columns.map((x) => ({
                                                              label:
                                                                  x.title?.toString() ||
                                                                  "",
                                                              value:
                                                                  x.title?.toString() ||
                                                                  "",
                                                          }))
                                                        : []
                                                }
                                            />
                                        </div>
                                    </>
                                )}
                            />
                        </div>

                        <div className="flex-table-control-filter">
                            <Popover
                                placement="bottom"
                                trigger="click"
                                className="flex-table-control-filter-popover"
                                overlayClassName="flex-table-control-popover-overlay"
                                content={
                                    <>
                                        <Form
                                            form={form}
                                            className="flex-table-form"
                                        >
                                            <Form.Item
                                                label="Column"
                                                name="name"
                                            >
                                                <Select
                                                    allowClear
                                                    options={columns.map(
                                                        (column: any) => {
                                                            let dataIndex =
                                                                column.dataIndex;
                                                            if (
                                                                column.dataIndex instanceof
                                                                Array
                                                            ) {
                                                                dataIndex =
                                                                    column.dataIndex.join(
                                                                        "."
                                                                    );
                                                            }

                                                            return {
                                                                label: column.title,
                                                                value: dataIndex,
                                                            };
                                                        }
                                                    )}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                label="Condition"
                                                name="condition"
                                            >
                                                <Select options={conditions} />
                                            </Form.Item>

                                            <Form.Item
                                                label="Value"
                                                name="value"
                                            >
                                                <Input
                                                    onPressEnter={onSubmit}
                                                />
                                            </Form.Item>

                                            <Button
                                                mode="create"
                                                onClick={() => onSubmit()}
                                                className="flex-table-form-btn-submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </>
                                }
                            >
                                <FilterOutlined />
                                <Typography>Filters</Typography>
                            </Popover>
                        </div>
                    </div>

                    <div className="flex-table-action-container">
                        {props.actionContent}
                    </div>
                </div>

                <AntdTable
                    {...props}
                    dataSource={filteredData}
                    columns={filteredCols?.map((column) => ({
                        ...column,
                        defaultSortOrder: "ascend",
                        showSorterTooltip: false,
                    }))}
                    className={`lfx-table ${props.className}`}
                    size={"small"}
                    scroll={{ x: "max-content" }}
                />
            </div>
        </>
    );
};

export { Table };
export type { TablePaginationConfig };
