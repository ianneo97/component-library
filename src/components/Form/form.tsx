import {
    Form as AntdForm,
    FormProps as AntdFormProps,
    FormItemProps as AntdFormItemProps,
    FormInstance as AntdFormInstance,
} from "antd";

import "./form.css";

export interface FormProps extends AntdFormProps {}
export interface FormItemProps extends AntdFormItemProps {}
export interface FormInstance extends AntdFormInstance {}

interface FormListProps {
    name: string;
    children: (fields: any, methods: any) => React.ReactNode;
}

const Form: React.FC<FormProps> = (props) => {
    return (
        <AntdForm
            {...props}
            colon={false}
            className={`lfx-form ${props.className}`}
        >
            <>{props.children}</>
        </AntdForm>
    );
};

const FormItem: React.FC<FormItemProps> = (props) => {
    return (
        <AntdForm.Item {...props} style={props.style}>
            {props.children}
        </AntdForm.Item>
    );
};

function useForm() {
    return AntdForm.useForm();
}

const FormList: React.FC<FormListProps> = (props) => {
    return <AntdForm.List {...props}>{props.children}</AntdForm.List>;
};

export { Form, FormItem, useForm, FormList };
