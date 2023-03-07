import { Table as AntdTable } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { ExpandableConfig, TableRowSelection } from "antd/es/table/interface";

export interface TableProps<T = any> {
    data: T[];
    columns: ColumnsType<T>;
    rowKey: string;
    className?: string;
    paginationConfig?: TablePaginationConfig | false;
    expandable?: ExpandableConfig<T>;
    rowSelection?: TableRowSelection<T>;
}

const Table: React.FC<TableProps> = (props) => {
    return (
        <AntdTable
            dataSource={props.data}
            columns={props.columns}
            className={props.className}
            scroll={{ x: "max-content" }}
            pagination={props.paginationConfig}
            rowKey={props.rowKey}
            expandable={props.expandable}
            rowSelection={props.rowSelection}
        />
    );
};

export { Table };
export type { TablePaginationConfig };
