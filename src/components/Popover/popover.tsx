import { Popover as AntdPopover, PopoverProps as AntdPopoverProps } from "antd";

export interface PopoverProps extends AntdPopoverProps {}

const Popover: React.FC<PopoverProps> = (props) => {
    return <AntdPopover {...props}>{props.children}</AntdPopover>;
};

export { Popover };
