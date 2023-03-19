import {
    InputNumber as AntdInputNumber,
    InputNumberProps as AntdInputNumberProps,
} from "antd";
import "./input-number.css";

export interface InputNumberProps extends AntdInputNumberProps {}

const InputNumber: React.FC<InputNumberProps> = (props) => {
    return (
        <AntdInputNumber
            {...props}
            className={`lfx-input-number ${props.className}`}
        />
    );
};

export { InputNumber };
