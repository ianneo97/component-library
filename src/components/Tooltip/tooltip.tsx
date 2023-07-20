import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from "antd";

const Tooltip: React.FC<AntdTooltipProps> = (props) => {
    return <AntdTooltip {...props} />;
};

export { Tooltip };
