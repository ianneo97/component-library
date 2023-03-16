import { Modal as AntdModal, ModalProps as AntdModalProps } from "antd";
import { Button } from "../Button";
import { Typography } from "../Typography";
import "./modal.css";

export interface CustomStepProps {
    title: string;
    children: React.ReactNode;
}
export interface ModalProps extends AntdModalProps {}
export interface StepperModalProps extends AntdModalProps {
    subtitle?: string;
    steps?: React.ReactNode;
    footerClassName?: string;
}

export const Modal: React.FC<ModalProps> = (props) => {
    return (
        <>
            <AntdModal
                {...props}
                className={`lfx-modal ${props.className}`}
                footer={[
                    <div className="lfx-modal-footer">
                        <Button mode="comment-hollow">Cancel</Button>
                        <Button mode="comment">OK</Button>
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
                    props.footer ? (
                        <div className={props.footerClassName}>
                            {props.footer}
                        </div>
                    ) : (
                        [
                            <div className="lfx-modal-footer">
                                <Button mode="comment-hollow">Cancel</Button>
                                <Button mode="comment">OK</Button>
                            </div>,
                        ]
                    )
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
