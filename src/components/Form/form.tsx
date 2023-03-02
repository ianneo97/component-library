import { Col, Form as AntdForm, FormInstance, Row, Typography } from "antd";
import { RuleObject } from "antd/es/form";
import "./form.css";

export interface FormItemProps {
    label: string; // Form item label
    name: string; // Form item name
    rules?: RuleObject[]; // Form item rules, if there are no rules, it is not required
    children: React.ReactNode; // Form item children
    dependencies?: string[]; // Form item dependencies
}

export interface FormProps<T = any> {
    form: FormInstance<T>; // Initial form instance
    items: FormItemProps[]; // Form items that need to be rendered
    className?: string; // Form class name
    children?: React.ReactNode; // Form children
    split?: boolean; // Whether to split the form
}

function chunk(items: FormItemProps[], size: number) {
    const chunks = [];

    while (items.length) {
        chunks.push(items.splice(0, size));
    }

    return chunks;
}

function renderFormItem(item: FormItemProps) {
    return (
        <AntdForm.Item
            key={item.name}
            className="base-form-item"
            hasFeedback
            dependencies={item.dependencies} // This will retrigger the rules on the dependencies value change
            label={
                <Typography
                    style={{
                        whiteSpace: "normal",
                        wordBreak: "break-all",
                    }}
                >
                    {item.label}
                </Typography>
            }
            name={item.name}
            required={item.rules?.some((rule) => rule.required) ?? false}
            rules={item.rules}
        >
            {item.children}
        </AntdForm.Item>
    );
}

const Form: React.FC<FormProps> = (props) => {
    return (
        <>
            <AntdForm
                form={props.form}
                className={`${props.className} base-form`}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
                scrollToFirstError={true}
            >
                {props.split ? (
                    <>
                        {chunk(props.items, 2).map((formItems) => (
                            <Row>
                                {formItems.map((item) => (
                                    <Col xs={24} sm={12} md={12}>
                                        {renderFormItem(item)}
                                    </Col>
                                ))}
                            </Row>
                        ))}
                    </>
                ) : (
                    props.items.map((item) => renderFormItem(item))
                )}
                {props.children}
            </AntdForm>
        </>
    );
};

function useForm(): [FormInstance] {
    return AntdForm.useForm();
}

export { Form };
export { useForm };
