import { Button } from "antd";
import { useState } from "react";
import { Modal } from "./modal";

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
                submitFn={submitFn}
                cancelFn={cancelFn}
                closeable={true}
                okText="Submit"
                cancelText="Close"
            >
                <p>Modal content</p>
            </Modal>

            <Button onClick={() => setOpen(true)}>Click Me!</Button>
        </>
    );
};
