import { Progress as AntdProgress } from "antd";

export interface ProgressProps {}

const Progress: React.FC<ProgressProps> = (props) => {
    return <AntdProgress />;
};

export { Progress };
