import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import {
    Form,
    Input,
    Popover,
    Select,
    Table as AntdTable,
    Typography,
} from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { ExpandableConfig, TableRowSelection } from "antd/es/table/interface";
import { useCallback, useState } from "react";
import { Button } from "../Button";
import "./table.css";

export interface TableProps<T = any> {
    data: T[];
    columns: ColumnsType<T>;
    rowKey: string;
    className?: string;
    paginationConfig?: TablePaginationConfig | false;
    expandable?: ExpandableConfig<T>;
    rowSelection?: TableRowSelection<T>;
    actionContent?: React.ReactNode;
}

const Table: React.FC<TableProps> = (props) => {
    const [form] = Form.useForm();
    const [filterValue, setFilterValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState(props.data);
    const [filteredCols, setFilteredCols] = useState(props.columns);
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

    const conditions = [
        { label: "Contains", value: "contains" },
        { label: "Equals", value: "equals" },
    ];

    const rowSelection = {
        selectedRowKeys: selectedKeys,
        onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedKeys(selectedRowKeys);
        },
    };

    const onSearch = useCallback(() => {
        const content = props.data.filter((item) =>
            Object.values(item).some((value) =>
                JSON.stringify(value)
                    .toLocaleLowerCase()
                    .includes(filterValue.toLocaleLowerCase())
            )
        );

        setFilteredData(content);
    }, [filterValue, props.data]);

    const onSelectChange = (value: string[]) => {
        setFilteredCols(
            props.columns.filter((column: any) =>
                value.includes(column.dataIndex)
            )
        );
    };

    const onSubmit = async () => {
        await form.validateFields();

        const values = form.getFieldsValue(true);

        switch (values.condition) {
            case "contains":
                return setFilteredData(
                    props.data.filter((x) =>
                        JSON.stringify(x[values.name])
                            .toLowerCase()
                            .includes(values.value.toLowerCase())
                    )
                );
            case "equals":
                return setFilteredData(
                    props.data.filter(
                        (x) => JSON.stringify(x[values.name]) === values.value
                    )
                );
            default:
                return setFilteredData(props.data);
        }
    };

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
                                allowClear
                                mode="multiple"
                                options={props.columns
                                    .filter(
                                        (column: any) =>
                                            column.dataIndex !== "actions"
                                    )
                                    .map((column: any) => ({
                                        label: column.title,
                                        value: column.dataIndex,
                                    }))}
                                defaultValue={props.columns
                                    .filter(
                                        (column: any) =>
                                            column.dataIndex !== "actions"
                                    )
                                    .map((column: any) => column.dataIndex)}
                                onChange={onSelectChange}
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
                                                    options={props.columns
                                                        .filter(
                                                            (column: any) =>
                                                                column.dataIndex !==
                                                                "actions"
                                                        )
                                                        .map((column: any) => ({
                                                            label: column.title,
                                                            value: column.dataIndex,
                                                        }))}
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
                    dataSource={filteredData}
                    columns={filteredCols.map((column) => ({
                        ...column,
                        defaultSortOrder: "ascend",
                        showSorterTooltip: false,
                    }))}
                    className={`lfx-table ${props.className}`}
                    size={"small"}
                    scroll={{ x: "max-content" }}
                    pagination={props.paginationConfig}
                    rowKey={props.rowKey}
                    expandable={props.expandable}
                    rowSelection={rowSelection}
                />
            </div>
        </>
    );
};

export { Table };
export type { TablePaginationConfig };
