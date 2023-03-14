import { Menu } from "./menu";

export default {
    title: "Menu",
    component: Menu,
};

export const DefaultMenu = () => {
    const mockItems = [
        { label: "Item 1", key: "item1" },
        { label: "Item 2", key: "item2" },
    ];
    return <Menu items={mockItems} mode="horizontal" />;
};
