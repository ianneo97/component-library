import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import {
    Checkbox,
    Input,
    Popover,
    Select,
    Table as AntdTable,
    Typography,
} from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { ExpandableConfig, TableRowSelection } from "antd/es/table/interface";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { Link } from "../Typography";
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
    const [filterValue, setFilterValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState(props.data);
    const [filteredCols, setFilteredCols] = useState(props.columns);
    const [column, setColumn] = useState<string>("");
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<CheckboxValueType[]>(
        []
    );

    const rowSelection = {
        selectedRowKeys: selectedKeys,
        onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedKeys(selectedRowKeys);
        },
    };

    const onSearch = useCallback(() => {
        const content = column
            ? props.data.filter((item: any) =>
                  JSON.stringify(item[column])
                      .toLocaleLowerCase()
                      .includes(filterValue.toLocaleLowerCase())
              )
            : props.data.filter((item) =>
                  Object.values(item).some((value) =>
                      JSON.stringify(value)
                          .toLocaleLowerCase()
                          .includes(filterValue.toLocaleLowerCase())
                  )
              );

        setFilteredData(content);
    }, [column, filterValue, props.data]);

    const onFiltersChanged = (values: CheckboxValueType[]) => {
        const clonedCols = cloneDeep(props.columns);

        setFilteredCols(
            clonedCols.filter((col) => !values.includes(col.title as string))
        );
        setSelectedFilters(values);
    };

    const resetFilters = () => {
        setFilteredCols(props.columns);
        setSelectedFilters([]);
    };

    useEffect(() => {
        onSearch();
    }, [column, onSearch]);

    return (
        <>
            <div className="flex-table-container">
                <div className="flex-table-controls-wrapper">
                    <div className="flex-table-control-container">
                        <Input
                            placeholder="Search"
                            onPressEnter={onSearch}
                            onChange={(e) => setFilterValue(e.target.value)}
                            addonAfter={<SearchOutlined />}
                        />

                        <div className="flex-table-control-filter">
                            <Typography>Columns: </Typography>
                            <Select
                                options={props.columns
                                    .filter(
                                        (column: any) =>
                                            column.dataIndex !== "actions"
                                    )
                                    .map((column: any) => ({
                                        label: column.title,
                                        value: column.dataIndex,
                                    }))}
                                onChange={(value) => setColumn(value as string)}
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
                                        <Checkbox.Group
                                            options={props.columns.map(
                                                (column) => ({
                                                    label: column.title as string,
                                                    value: column.title as string,
                                                    disabled:
                                                        column.title === "ID",
                                                })
                                            )}
                                            onChange={onFiltersChanged}
                                            value={selectedFilters}
                                        />
                                        <Link onClick={resetFilters}>
                                            Reset
                                        </Link>
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
