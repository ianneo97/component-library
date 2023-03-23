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
    return <AntdForm.Item {...props}>{props.children}</AntdForm.Item>;
};

function useForm() {
    return AntdForm.useForm();
}

export { Form, FormItem, useForm };
