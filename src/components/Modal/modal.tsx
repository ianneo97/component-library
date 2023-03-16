import { Modal as AntdModal, ModalProps as AntdModalProps, Steps } from "antd";
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
    steps?: string[];
}

const Modal: React.FC<ModalProps> = (props) => {
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

const StepperModal: React.FC<StepperModalProps> = (props) => {
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
                <div className="lfx-modal-stepper-body">
                    <Typography className="lfx-modal-subtitle">
                        {props.subtitle}
                    </Typography>

                    <div className="lfx-stepper-body">
                        <Steps
                            direction="vertical"
                            items={props.steps?.map((step) => ({
                                title: step,
                            }))}
                            size="small"
                        ></Steps>

                        <div className="lfx-stepper-content">
                            {props.children}
                        </div>
                    </div>
                </div>

                {/* {props?.children} */}
            </AntdModal>
        </>
    );
};

export { Modal };
export { StepperModal };
