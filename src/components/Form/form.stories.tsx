import { useState } from "react";
import { Button } from "../Button";
import { Steps } from "../Steps";
import { StepperModal } from "../Modal";
import { Select } from "../Select";
import { Typography } from "../Typography";
import { Form, FormItem, useForm } from "./form";
import { Input } from "../Input";
import { InputNumber } from "../InputNumber";
import { Switch } from "../Switch";

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
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <Typography
                                    className="lfx-form-header"
                                    style={{ marginBottom: "16px" }}
                                >
                                    Please fill out the required fields
                                </Typography>

                                <Form form={form}>
                                    <FormItem label={"product:productName"}>
                                        <Input />
                                    </FormItem>

                                    <FormItem label={"product:create.cost"}>
                                        <InputNumber />
                                    </FormItem>

                                    <FormItem label={"product:category"}>
                                        <Select showSearch />
                                    </FormItem>

                                    <FormItem label={"product:subCategory"}>
                                        <Select showSearch />
                                    </FormItem>

                                    <FormItem label={"product:measureUnit"}>
                                        <Select />
                                    </FormItem>

                                    <FormItem label={"product:measureValue"}>
                                        <InputNumber />
                                    </FormItem>
                                </Form>
                            </div>
                        </>
                    ) : null}

                    {current === 1 ? (
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <Typography
                                    className="lfx-form-header"
                                    style={{ marginBottom: "16px" }}
                                >
                                    You may skip this part and edit these fields
                                    later
                                </Typography>

                                <Form form={form}>
                                    <FormItem
                                        name="isActive"
                                        label={"product:active"}
                                    >
                                        <Switch />
                                    </FormItem>

                                    <FormItem
                                        name="weight"
                                        label={"product:weight"}
                                    >
                                        <InputNumber
                                            style={{
                                                width: "100%",
                                            }}
                                        />
                                    </FormItem>

                                    <FormItem
                                        name="color"
                                        label={"product:colorCode"}
                                    >
                                        <Input />
                                    </FormItem>

                                    <FormItem
                                        name="externalDataId"
                                        label={"product:lfItemNo"}
                                    >
                                        <Input />
                                    </FormItem>

                                    <FormItem
                                        name="hsCode"
                                        label={"product:hsCode"}
                                    >
                                        <Input />
                                    </FormItem>

                                    <FormItem name="sku" label={"product:sku"}>
                                        <Input />
                                    </FormItem>

                                    <FormItem name="upc" label={"product:upc"}>
                                        <Input />
                                    </FormItem>

                                    <FormItem
                                        name="code"
                                        label={"product:refNo"}
                                    >
                                        <Input />
                                    </FormItem>

                                    <FormItem
                                        name="collection"
                                        label={"product:collection"}
                                    >
                                        <Input />
                                    </FormItem>
                                </Form>
                            </div>
                        </>
                    ) : null}
                </div>
            </StepperModal>
            Form Data: {data}
        </>
    );
};
