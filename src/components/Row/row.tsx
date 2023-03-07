import {
    Row as AntdRow,
    Col as AntdCol,
    ColProps as AntdColProps,
    RowProps as AntdRowProps,
} from "antd";

export interface RowProps extends AntdRowProps {}
export interface ColProps extends AntdColProps {}

const Row: React.FC<RowProps> = (props) => {
    return <AntdRow gutter={12} {...props}></AntdRow>;
};

const Col: React.FC<ColProps> = (props) => {
    return <AntdCol {...props}></AntdCol>;
};

export { Row, Col };
