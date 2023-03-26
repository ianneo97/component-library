import { Drawer as AntdDrawer, DrawerProps as AntdDrawerProps } from "antd";

export interface DrawerProps extends AntdDrawerProps {}

export const Drawer = (props: DrawerProps) => {
    return <AntdDrawer {...props} />;
};
