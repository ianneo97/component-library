import { Button, Input } from "antd";
import { useState } from "react";
import { Form, FormItemProps, useForm } from "./form";

export default {
    title: "Form",
    component: Form,
};

export const Default = () => {
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
        { label: "Description", name: "description", children: <Input /> },
    ];

    function getValues() {
        const data = form.getFieldsValue(true);
        form.validateFields();

        setData(JSON.stringify(data));
    }

    return (
        <>
            <Form form={form} items={items} split={true}>
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
