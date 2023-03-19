import { Modal as AntdModal, ModalProps as AntdModalProps } from "antd";
import { Typography } from "../Typography";
import "./modal.css";

export interface CustomStepProps {
    title: string;
    children: React.ReactNode;
}
export interface ModalProps extends AntdModalProps {
    footerChildren?: React.ReactNode;
}
export interface StepperModalProps extends AntdModalProps {
    subtitle?: string;
    steps?: React.ReactNode;
    footerClassName?: string;
    footerChildren?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
    return (
        <>
            <AntdModal
                {...props}
                className={`lfx-modal ${props.className}`}
                footer={[
                    <div className="lfx-modal-footer">
                        {props.footerChildren}
                    </div>,
                ]}
            >
                {props?.children}
            </AntdModal>
        </>
    );
};

export const StepperModal: React.FC<StepperModalProps> = (props) => {
    return (
        <>
            <AntdModal
                {...props}
                width={750}
                className={`lfx-modal ${props.className}`}
                footer={
                    <div
                        className={`lfx-modal-footer ${props.footerClassName}`}
                    >
                        {props.footer}
                    </div>
                }
            >
                <div className="lfx-modal-stepper-body">
                    <Typography className="lfx-modal-subtitle">
                        {props.subtitle}
                    </Typography>

                    <div className="lfx-stepper-body">
                        <div className="lfx-stepper-sidebar">{props.steps}</div>
                        <div className="lfx-stepper-content">
                            {props.children}
                        </div>
                    </div>
                </div>
            </AntdModal>
        </>
    );
};
