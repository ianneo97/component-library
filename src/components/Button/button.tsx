import { Button as AntdButton, Tooltip } from "antd";

export interface ButtonProps {
    type?: "primary" | "default" | "link" | "text" | "dashed" | undefined;
    disabled?: boolean;
    danger?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    title?: string;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <Tooltip title={props.title}>
            <AntdButton
                loading={props.loading}
                type={props.type}
                icon={props.icon}
                disabled={props.disabled}
                danger={props.danger}
            >
                {props.children}
            </AntdButton>
        </Tooltip>
    );
};

export { Button };
