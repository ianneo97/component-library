import { Typography } from "antd";
import { Select } from "./select";

export default {
    title: "Select",
    component: Select,
};

const options = [
    {
        label: "Option 1",
        value: "one",
    },

    {
        label: "Option 2",
        value: "two",
    },
];

export const Default = () => {
    return <Select options={options}></Select>;
};

export const SelectWithSearch = () => {
    return (
        <>
            <Typography.Title level={4}>Select With Search</Typography.Title>
            <Select options={options} showSearch></Select>
        </>
    );
};
