import { Button } from "antd";
import { useState } from "react";
import { Steps } from "../Steps";
import { Typography } from "../Typography";
import { Modal, StepperModal } from "./modal";

export default {
    title: "Modal",
    component: Modal,
};

export const Default = () => {
    const [open, setOpen] = useState(false);

    const submitFn = () => {
        setOpen(false);
    };

    const cancelFn = () => {
        setOpen(false);
    };

    return (
        <>
            <Modal
                open={open}
                title="Storybook Modal"
                onOk={submitFn}
                onCancel={cancelFn}
                closable={true}
                okText="Submit"
                cancelText="Close"
            >
                <p>Modal content</p>
            </Modal>

            <Button onClick={() => setOpen(true)}>Click Me!</Button>
        </>
    );
};

export const StepModal = () => {
    const [open, setOpen] = useState(false);
    const steps = ["Requried Fields", "Optional Fields", "Review"];

    const submitFn = () => {
        setOpen(false);
    };

    const cancelFn = () => {
        setOpen(false);
    };

    return (
        <>
            <StepperModal
                open={open}
                title="Storybook Modal"
                subtitle="If a product has been already traced, the changes will immediately be reflected in past orders. Thus, be careful to update the details"
                steps={
                    <>
                        <Steps
                            direction="vertical"
                            items={steps.map((step) => ({ title: step }))}
                            size="small"
                        />
                    </>
                }
                onOk={submitFn}
                onCancel={cancelFn}
                closable={true}
                okText="Submit"
                cancelText="Close"
            >
                <Typography>Hi there</Typography>
            </StepperModal>

            <Button onClick={() => setOpen(true)}>Click Me!</Button>
        </>
    );
};
