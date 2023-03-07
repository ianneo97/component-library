import { Input as AntdInput, InputProps as AntdInputProps } from "antd";

export interface InputProps extends AntdInputProps {}

const Input: React.FC<InputProps> = (props) => {
    return <AntdInput bordered={true} {...props} />;
};

const TextArea: React.FC<InputProps> = (props) => {
    return (
        <AntdInput.TextArea
            bordered={true}
            showCount
            maxLength={100}
            allowClear
        />
    );
};

export { Input };
export { TextArea };
