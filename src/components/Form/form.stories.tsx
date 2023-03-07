import { Button, Card, Input, Select } from "antd";
import { useState } from "react";
import { Form, FormItemProps, renderFormItem, useForm } from "./form";

export default {
    title: "Form",
    component: Form,
};

export const FormWithSplit = () => {
    const [form] = useForm();
    const [data, setData] = useState("");

    const items: FormItemProps[] = [
        { label: "Nameeeeeeeeeeeeeeeee", name: "name", children: <Input /> },
        {
            label: "Age",
            name: "age",
            children: <Input />,
            rules: [{ required: true, message: "Age is required" }],
            dependencies: ["name"],
        },
        {
            label: "Description",
            name: "description",
            children: <Select style={{ width: "100%" }} />,
        },
    ];

    function getValues() {
        const data = form.getFieldsValue(true);
        form.validateFields();

        setData(JSON.stringify(data));
    }

    return (
        <>
            <Card>
                <Form form={form} split={true}>
                    {items.map((item) => renderFormItem(item))}
                </Form>
                <div style={{ display: "flex", placeContent: "flex-end" }}>
                    <Button onClick={getValues} type="primary">
                        Save
                    </Button>
                </div>
            </Card>
            Form Data: {data}
        </>
    );
};

export const DefaultForm = () => {
    const [form] = useForm();
    const [data, setData] = useState("");

    const items: FormItemProps[] = [
        { label: "Nameeeeeeeeeeeeeeeee", name: "name", children: <Input /> },
        {
            // label: "Age With Many Many Spaces ",
            name: "age",
            children: <Input />,
            rules: [{ required: true, message: "Age is required" }],
            dependencies: ["name"],
        },
        { label: "Description", name: "description", children: <Input /> },
    ];

    function getValues() {
        const data = form.getFieldsValue(true);
        form.validateFields();

        setData(JSON.stringify(data));
    }

    return (
        <>
            <Form form={form}>
                {items.map((item) => renderFormItem(item))}
                <div style={{ display: "flex", placeContent: "flex-end" }}>
                    <Button onClick={getValues} type="primary">
                        Save
                    </Button>
                </div>
            </Form>
            Form Data: {data}
        </>
    );
};
