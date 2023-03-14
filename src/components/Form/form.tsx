import {
    Col,
    Form as AntdForm,
    FormInstance,
    Row,
    Typography,
    ColProps,
} from "antd";
import { RuleObject, FormListFieldData, FormListOperation } from "antd/es/form";
import { ReactNode } from "react";

export interface FormItemProps {
    label?: string | null; // Form item label
    name: string | string[] | (string | number)[]; // Form item name
    rules?: RuleObject[]; // Form item rules, if there are no rules, it is not required
    className?: string;
    children?: React.ReactNode; // Form item children
    dependencies?: string[]; // Form item dependencies
}

export interface FormProps<T = any> {
    form: FormInstance<T>; // Initial form instance
    items?: FormItemProps[]; // Form items that need to be rendered
    className?: string; // Form class name
    children?: ReactNode | ReactNode[]; // Form children
    split?: boolean; // Whether to split the form
    labelProps?: ColProps;
    wrapperProps?: ColProps;
}

export interface FormListProps {
    name: string;
    children: (
        fields: FormListFieldData[],
        operation: FormListOperation,
        meta: {
            errors: React.ReactNode[];
            warnings: React.ReactNode[];
        }
    ) => React.ReactNode;
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
            key={typeof item.name === "string" ? item.name : item.name[0]}
            style={{ width: "100%" }}
            hasFeedback
            dependencies={item.dependencies} // This will retrigger the rules on the dependencies value change
            className={item.className}
            label={
                item.label ? (
                    <Typography
                        style={{
                            whiteSpace: "break-spaces",
                            wordBreak: "break-word",
                        }}
                    >
                        {item.label}
                    </Typography>
                ) : null
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
                {props.split && props.children instanceof Array ? (
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

const FormItem: React.FC<FormItemProps> = (item) => {
    return (
        <AntdForm.Item
            key={typeof item.name === "string" ? item.name : item.name[0]}
            style={{ width: "100%" }}
            hasFeedback
            dependencies={item.dependencies} // This will retrigger the rules on the dependencies value change
            className={item.className}
            label={
                item.label ? (
                    <Typography
                        style={{
                            whiteSpace: "break-spaces",
                            wordBreak: "break-word",
                        }}
                    >
                        {item.label}
                    </Typography>
                ) : null
            }
            name={item.name}
            required={item.rules?.some((rule) => rule.required) ?? false}
            rules={item.rules}
        >
            {item.children}
        </AntdForm.Item>
    );
};

const FormList: React.FC<FormListProps> = (props) => {
    return <AntdForm.List name={props.name}>{props.children}</AntdForm.List>;
};

function useForm(): [FormInstance] {
    return AntdForm.useForm();
}

export { Form };
export { FormItem };
export { FormList };
export { useForm };
export { renderFormItem };
