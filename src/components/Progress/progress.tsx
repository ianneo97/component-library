import {
    Progress as AntdProgress,
    ProgressProps as AntdProgressProps,
} from "antd";

export interface ProgressProps extends AntdProgressProps {}

const Progress: React.FC<ProgressProps> = (props) => {
    return <AntdProgress {...props} />;
};

export { Progress };
