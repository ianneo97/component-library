import {
    CollapseProps as AntdCollapseProps,
    Collapse as AntdCollapse,
    CollapsePanelProps as AntdCollapsePanelProps,
} from "antd";

export interface CollapseProps extends AntdCollapseProps {}
export interface CollapsePanelProps extends AntdCollapsePanelProps {}

const { Panel: AntdPanel } = AntdCollapse;

export const Collapse: React.FC<CollapseProps> = (props) => {
    return <AntdCollapse {...props}>{props.children}</AntdCollapse>;
};

export const CollapsePanel: React.FC<CollapsePanelProps> = (props) => {
    return <AntdPanel {...props}>{props.children}</AntdPanel>;
};
