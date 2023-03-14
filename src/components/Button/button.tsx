import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";
import "./button.css";

export interface ButtonProps extends AntdButtonProps {
    mode: "create" | "edit" | "delete" | "comment";
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <AntdButton className={`lfx-btn lfx-${props.mode}-btn`}>
            {props.children}
        </AntdButton>
    );
};

export { Button };
