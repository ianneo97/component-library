import { Table as AntdTable } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";

export interface TableProps<T = any> {
    data: T[];
    columns: ColumnsType<T>;
    rowKey: string;
    paginationConfig?: TablePaginationConfig;
}

const Table: React.FC<TableProps> = (props) => {
    return (
        <AntdTable
            dataSource={props.data}
            columns={props.columns}
            scroll={{ x: "max-content" }}
            pagination={props.paginationConfig}
            rowKey={props.rowKey}
        />
    );
};

export { Table };
