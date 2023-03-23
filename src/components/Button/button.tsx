import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";
import "./button.css";

export interface ButtonProps extends AntdButtonProps {
    mode:
        | "create"
        | "edit"
        | "delete"
        | "comment"
        | "comment-hollow"
        | "borderless";
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <AntdButton
            {...props}
            className={`lfx-btn lfx-${props.mode}-btn ${props.className}`}
        >
            {props.children}
        </AntdButton>
    );
};

export { Button };
