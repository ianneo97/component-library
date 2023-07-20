import {
    Popconfirm as AntdPopconfirm,
    PopconfirmProps as AntdPopconfirmProps,
} from "antd";

export interface PopconfirmProps extends AntdPopconfirmProps {}

const Popconfirm: React.FC<PopconfirmProps> = (props) => {
    return <AntdPopconfirm {...props} />;
};

export { Popconfirm };
