import { Space as AntdSpace, SpaceProps as AntdSpaceProps } from "antd";

export interface SpaceProps extends AntdSpaceProps {}

const Space: React.FC<SpaceProps> = (props) => {
    return <AntdSpace {...props} />;
};

export { Space };
