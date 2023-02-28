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
        { label: "Name", name: "name", children: <Input /> },
    ];

    function getValues() {
        const data = form.getFieldsValue(true);

        setData(JSON.stringify(data));
    }

    return (
        <>
            <Form form={form} items={items}></Form>

            <Button onClick={getValues}>Click me!</Button>
            <br />
            {data}
        </>
    );
};
