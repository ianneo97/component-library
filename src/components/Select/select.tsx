import { Select as AntdSelect, SelectProps as AntdSelectProps } from "antd";

export interface SelectProps extends AntdSelectProps {
    width?: number | string;
}

const Select: React.FC<SelectProps> = (props) => {
    return (
        <AntdSelect
            {...props}
            style={{ width: props.width ? props.width : "100%" }}
            optionFilterProp={props.showSearch ? "children" : undefined}
            filterOption={
                props.showSearch
                    ? (input, option) =>
                          (option?.label ?? "")
                              .toString()
                              .toLowerCase()
                              .includes(input.toLowerCase())
                    : undefined
            }
            options={props.options}
        />
    );
};

export { Select };
