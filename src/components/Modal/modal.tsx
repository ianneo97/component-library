import { ButtonProps, Modal as AntdModal } from "antd";

export interface ModalProps {
    open: boolean;
    title?: string;
    okText?: string;
    okButtonProps?: ButtonProps;
    cancelText?: string;
    children?: React.ReactNode;
    width?: number | string;
    closeable?: boolean;
    submitFn: () => void;
    cancelFn: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
    return (
        <>
            <AntdModal
                title={props.title}
                open={props.open}
                okText={props.okText}
                okButtonProps={props.okButtonProps}
                cancelText={props.cancelText}
                onOk={props.submitFn}
                onCancel={props.cancelFn}
                width={props.width}
                closable={props.closeable || false}
            >
                {props?.children}
            </AntdModal>
        </>
    );
};

export { Modal };
