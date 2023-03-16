import { Input } from "antd";
import { useState } from "react";
import { Button } from "../Button";
import { Steps } from "../Steps";
import { StepperModal } from "../Modal";
import { Select } from "../Select";
import { Typography } from "../Typography";
import { Form, FormItem, useForm } from "./form";

export default {
    title: "Form",
    component: Form,
};

export const FormWithSplit = () => {
    const [form] = useForm();
    const [data, setData] = useState("");
    const [current, setCurrent] = useState(0);
    const steps = ["Required Fields", "Optional Fields", "Review"];

    return (
        <>
            <StepperModal
                open={true}
                title="Create new product"
                footer={[
                    <>
                        {current > 0 ? (
                            <Button
                                mode="comment-hollow"
                                className="prv-btn"
                                onClick={() => setCurrent(current - 1)}
                            >
                                Previous
                            </Button>
                        ) : null}
                        <Button mode="comment-hollow">Cancel</Button>
                        {current < steps.length - 1 ? (
                            <Button
                                mode="comment"
                                onClick={() => setCurrent(current + 1)}
                            >
                                Next
                            </Button>
                        ) : (
                            <Button mode="comment">Submit</Button>
                        )}
                    </>,
                ]}
                footerClassName="custom-modal-footer"
                subtitle="If a product has been already traced, the changes will immediately be reflected in past orders.
                Thus, be careful to update the details"
                steps={
                    <>
                        <Steps
                            direction="vertical"
                            items={steps.map((step) => ({ title: step }))}
                            size="small"
                            current={current}
                        ></Steps>
                    </>
                }
            >
                <div className="lfx-form-content">
                    {current === 0 ? (
                        <>
                            <Typography className="lfx-form-header">
                                Please fill out the required fields
                            </Typography>

                            <Form form={form}>
                                <FormItem label="Product Name">
                                    <Input />
                                </FormItem>

                                <FormItem label="Content">
                                    <Select />
                                </FormItem>

                                <FormItem label="Help">
                                    <Input />
                                </FormItem>
                                <FormItem label="Help">
                                    <Input />
                                </FormItem>
                                <FormItem label="Help">
                                    <Input />
                                </FormItem>
                                <FormItem label="Help">
                                    <Input />
                                </FormItem>
                            </Form>
                        </>
                    ) : null}
                </div>
            </StepperModal>
            Form Data: {data}
        </>
    );
};
