import { Modal as AntdModal, ModalProps } from "antd";
import React, { useState } from "react";
import { Button } from "../Button";
import { FormInstance } from "../Form/index";
import { Space } from "../Space";
import { Steps } from "../Steps";
import { Subtitle } from "../Typography";
import "./index.css";

export interface IModalProps extends Omit<ModalProps, "onOk" | "onCancel"> {
    okFn?: () => void;
    cancelFn?: () => void;
    form?: FormInstance;
}

export interface StepModalItemProps {
    title: string;
    description?: string;
    content: React.ReactNode;
}

export interface IStepModalProps extends Omit<IModalProps, "children"> {
    stepContent: StepModalItemProps[];
    subtitle?: string;
    nextTxt?: string;
    prevTxt?: string;
}

export const Modal: React.FC<IModalProps> = ({
    okFn,
    cancelFn,
    cancelText = "Close",
    okText = "Submit",
    children,
    ...rest
}) => {
    return (
        <AntdModal
            {...rest}
            onCancel={cancelFn}
            className={`custom-modal ${rest.className || ""}`}
            footer={
                <>
                    <Space>
                        <Button btntype="Close" onClick={cancelFn}>
                            {cancelText}
                        </Button>
                        <Button btntype="Submit" onClick={okFn}>
                            {okText}
                        </Button>
                    </Space>
                </>
            }
        >
            {children}
        </AntdModal>
    );
};

export const StepModal: React.FC<IStepModalProps> = ({
    okFn,
    cancelFn,
    cancelText = "Close",
    okText = "Submit",
    nextTxt = "Next",
    prevTxt = "Previous",
    form,
    subtitle,
    stepContent,
    ...rest
}) => {
    const [current, setCurrent] = useState(0);

    const next = async () => {
        if (form) {
            await form.validateFields();
        }

        setCurrent((prev) => prev + 1);
    };

    const prev = async () => {
        setCurrent((prev) => prev - 1);
    };

    return (
        <AntdModal
            {...rest}
            onCancel={cancelFn}
            className={`custom-modal ${rest.className || ""}`}
            footer={
                <>
                    <div
                        style={{
                            display: "flex",
                            justifyContent:
                                current > 0 ? "space-between" : "flex-end",
                            width: "100%",
                        }}
                    >
                        <Button
                            btntype="Close"
                            onClick={prev}
                            hidden={current === 0}
                        >
                            {prevTxt}
                        </Button>

                        <Space>
                            <Button btntype="Close" onClick={cancelFn}>
                                {cancelText}
                            </Button>

                            {current < stepContent.length - 1 ? (
                                <Button btntype="Submit" onClick={next}>
                                    {nextTxt}
                                </Button>
                            ) : (
                                <Button btntype="Submit" onClick={okFn}>
                                    {okText}
                                </Button>
                            )}
                        </Space>
                    </div>
                </>
            }
        >
            <Space direction="vertical" size="large">
                {subtitle && <Subtitle>{subtitle}</Subtitle>}

                <div style={{ display: "flex" }}>
                    <Steps
                        style={{
                            flex: 1,
                            background: "#F2F2F2",
                            paddingLeft: "18px",
                            paddingTop: "24px",
                            borderRadius: "8px 0px 0px 8px",
                        }}
                        size="small"
                        direction="vertical"
                        items={stepContent.map((x) => ({
                            title: x.title,
                            description: x.description,
                        }))}
                        current={current}
                    ></Steps>

                    <div
                        style={{
                            flex: 2.5,
                            paddingLeft: "12px",
                            paddingTop: "18px",
                            border: "1px solid #F2F2F2",
                            borderRadius: "0px 8px 8px 0px",
                        }}
                    >
                        {stepContent[current].content}
                    </div>
                </div>
            </Space>
        </AntdModal>
    );
};
