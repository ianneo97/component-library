import {
    Checkbox as AntdCheckbox,
    CheckboxProps as AntdCheckboxProps,
} from "antd";

interface CheckboxProps extends AntdCheckboxProps {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    return <AntdCheckbox {...props} />;
};
