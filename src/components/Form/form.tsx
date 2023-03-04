import {
    Col,
    Form as AntdForm,
    FormInstance,
    Row,
    Typography,
    ColProps,
} from "antd";
import { RuleObject } from "antd/es/form";
import "./form.css";

export interface FormItemProps {
    label: string; // Form item label
    name: string; // Form item name
    rules?: RuleObject[]; // Form item rules, if there are no rules, it is not required
    children: React.ReactNode; // Form item children
    dependencies?: string[]; // Form item dependencies
}

export interface WrapperProps {}

export interface FormProps<T = any> {
    form: FormInstance<T>; // Initial form instance
    items?: FormItemProps[]; // Form items that need to be rendered
    className?: string; // Form class name
    children?: React.ReactNode[]; // Form children
    split?: boolean; // Whether to split the form
    labelProps?: ColProps;
    wrapperProps?: ColProps;
}

function chunk(items: React.ReactNode[], size: number) {
    const duplicatedArray = Object.assign([], items);
    const chunks = [];

    while (duplicatedArray.length) {
        chunks.push(duplicatedArray.splice(0, size));
    }

    return chunks;
}

function renderFormItem(item: FormItemProps) {
    return (
        <AntdForm.Item
            key={item.name}
            className="base-form-item"
            style={{ width: "100%" }}
            hasFeedback
            dependencies={item.dependencies} // This will retrigger the rules on the dependencies value change
            label={
                <Typography
                    style={{
                        whiteSpace: "break-spaces",
                        wordBreak: "break-word",
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
                className={`${props.className}`}
                labelWrap={true}
                labelCol={props.labelProps ?? { span: 5 }}
                wrapperCol={props.wrapperProps ?? { span: 19 }}
                scrollToFirstError={true}
                validateTrigger="onBlur"
            >
                {props.split ? (
                    <>
                        {chunk(props?.children || [], 2).map((formItems) => (
                            <Row gutter={16}>
                                {formItems.map((item) => (
                                    <Col xs={24} sm={12} md={12}>
                                        {item}
                                    </Col>
                                ))}
                            </Row>
                        ))}
                    </>
                ) : (
                    props.children
                )}
            </AntdForm>
        </>
    );
};

function useForm(): [FormInstance] {
    return AntdForm.useForm();
}

export { Form };
export { useForm };
export { renderFormItem };
