import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Table as AntdTable, Checkbox, TableProps } from "antd";
import { useMemo, useState } from "react";
import { Button } from "../Button";
import {
    CheckboxChangeEvent,
    CheckboxGroup,
    CheckboxValueType,
} from "../Checkbox";
import { Form, FormItem, useForm } from "../Form";
import { Input } from "../Input/input";
import { Popover } from "../Popover";
import { Select } from "../Select";
import { Space } from "../Space";
import { Text } from "../Typography";
import { COLOURS } from "../constant";
import "./index.css";

export interface ITableProps<T> extends TableProps<T> {
    showFilter?: boolean;
    showSearch?: boolean;
    showColumns?: boolean;
    actions?: React.ReactNode;
}
export type { ColumnsType } from "antd/es/table";

export const Table: React.FC<ITableProps<any>> = ({
    children,
    dataSource,
    columns,
    actions,
    showFilter = true,
    showSearch = true,
    showColumns = true,
    ...rest
}) => {
    const [form] = useForm();
    const [searchValue, setSearchValue] = useState("");

    // Checkbox controls
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(true);
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(
        (columns || []).map((x) => x.title?.toString() || "")
    );
    const checkboxOptions = (columns || [])?.filter(
        (column) => column.title !== "Actions"
    );

    // Filtered Columns
    const filteredCols = useMemo(
        () =>
            (columns || []).filter((column) => {
                if (column.title === "Actions") return true;

                return checkedList.includes(column.title?.toString() || "");
            }),
        [columns, checkedList]
    );
    const [filteredData, setFilteredData] = useState<any>(dataSource);

    const handleSearch = () => {
        const content = dataSource?.filter((item) =>
            Object.values(item).some((value) =>
                JSON.stringify(value || "")
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
            )
        );

        setFilteredData(content);
    };

    const handleFilter = async () => {
        await form.validateFields();
        const values = form.getFieldsValue();

        const newVal = dataSource?.filter((obj) => {
            const propertyNames = values.column.split(".");
            const value = propertyNames.reduce((acc: any, curr: any) => {
                return acc && acc[curr];
            }, obj);

            return JSON.stringify(value)
                .toLowerCase()
                .includes(values.value.toLowerCase());
        });

        setFilteredData(newVal);
    };

    const clearFilter = () => {
        setFilteredData(dataSource);
        setSearchValue("");
        form.resetFields();
    };

    const renderCheckboxContent = () => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 5px",
                    gap: "2px",
                }}
            >
                <Checkbox
                    checked={checkAll}
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                >
                    All
                </Checkbox>

                <CheckboxGroup
                    className="custom-table-checkbox"
                    onChange={onChange}
                    value={checkedList}
                    options={checkboxOptions.map((x) => ({
                        label: x.title?.toString() || "",
                        value: x.title?.toString() || "",
                    }))}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                ></CheckboxGroup>
            </div>
        );
    };

    const renderPopoverContent = () => {
        const defaultRules = [
            {
                required: true,
                message: "This field is required",
            },
        ];
        return (
            <>
                <Form
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    labelAlign="left"
                >
                    <FormItem
                        label="Column"
                        name="column"
                        required
                        rules={defaultRules}
                    >
                        <Select
                            options={(columns || []).map((x) => ({
                                label: x.title?.toString() || "",
                                value: x.key?.toString() || "",
                            }))}
                        />
                    </FormItem>

                    <FormItem
                        label="Condition"
                        name="condition"
                        required
                        rules={defaultRules}
                    >
                        <Select
                            options={[{ label: "Contains", value: "contains" }]}
                        />
                    </FormItem>

                    <FormItem
                        label="Value"
                        name="value"
                        required
                        rules={defaultRules}
                    >
                        <Input />
                    </FormItem>

                    <Space
                        align="end"
                        size="small"
                        style={{ width: "100%", justifyContent: "flex-end" }}
                    >
                        <Button btntype="Close" onClick={clearFilter}>
                            Clear
                        </Button>
                        <Button btntype="Submit" onClick={handleFilter}>
                            Submit
                        </Button>
                    </Space>
                </Form>
            </>
        );
    };

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < checkboxOptions.length);
        setCheckAll(list.length === checkboxOptions.length);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(
            e.target.checked
                ? checkboxOptions.map((x) => x.title?.toString() || "")
                : []
        );
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                        flex: 2,
                    }}
                >
                    <div
                        style={{ flex: 1, maxWidth: "250px" }}
                        hidden={!showSearch}
                    >
                        <Input
                            onChange={(e) => setSearchValue(e.target.value)}
                            addonAfter={
                                <SearchOutlined onClick={handleSearch} />
                            }
                            className="custom-table-search"
                            onPressEnter={handleSearch}
                            placeholder="Search text"
                            value={searchValue}
                        />
                    </div>

                    <div
                        style={{
                            flex: 1,
                            display: !showColumns ? "none" : "flex",
                            flexDirection: "row",
                            gap: "5px",
                            maxWidth: "200px",
                            width: "200px",
                        }}
                    >
                        <Form
                            style={{
                                maxWidth: "200px",
                                display: "block",
                                width: "100%",
                            }}
                        >
                            <FormItem
                                label="Columns"
                                style={{ margin: "0 auto" }}
                            >
                                <Select
                                    placeholder="Columns"
                                    value={checkedList.join(",")}
                                    dropdownRender={() =>
                                        renderCheckboxContent()
                                    }
                                    dropdownStyle={{ width: "100%" }}
                                />
                            </FormItem>
                        </Form>
                    </div>

                    <div style={{ flex: 1, gap: "5px" }} hidden={!showFilter}>
                        <Popover
                            className="custom-table-filter"
                            content={renderPopoverContent}
                            placement="topLeft"
                        >
                            <FilterOutlined />
                            <Text color={COLOURS.BRAND.Secondary}>Filters</Text>
                        </Popover>
                    </div>
                </div>

                <div style={{ flex: 1 }}>{actions}</div>
            </div>

            <AntdTable
                {...rest}
                dataSource={filteredCols.length > 1 ? filteredData : []}
                columns={filteredCols}
                className="custom-table"
            >
                {children}
            </AntdTable>
        </>
    );
};
