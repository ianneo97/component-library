import {
    Input as AntdInput,
    InputProps as AntdInputProps,
    InputRef,
} from "antd";
import React from "react";

export interface InputProps extends AntdInputProps {
    ref?: React.RefObject<InputRef>;
}

const Input = React.forwardRef<InputRef, InputProps>((props, ref) => {
    return <AntdInput ref={ref} bordered={true} {...props} />;
});

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
