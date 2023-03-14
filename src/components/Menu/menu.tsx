import { MenuProps as AntdMenuProps, Menu as AntdMenu } from "antd";

interface MenuProps extends AntdMenuProps {}

const Menu: React.FC<MenuProps> = (props) => {
    return <AntdMenu items={props.items} mode={props.mode}></AntdMenu>;
};

export { Menu };
export type { MenuProps };
