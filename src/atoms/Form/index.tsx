import { Form as AntdForm, FormItemProps, FormProps } from "antd";
import { FormListProps } from "antd/es/form";

export interface IFormProps extends FormProps {}
export interface IFormItemProps extends FormItemProps {}
export interface IFormListProps extends FormListProps {}

export const Form: React.FC<IFormProps> = ({ children, ...rest }) => {
    return (
        <AntdForm {...rest}>
            <>{children}</>
        </AntdForm>
    );
};

export const FormItem: React.FC<IFormItemProps> = ({ children, ...rest }) => {
    return <AntdForm.Item {...rest}>{children}</AntdForm.Item>;
};

export const FormList: React.FC<IFormListProps> = ({ children, ...rest }) => {
    return <AntdForm.List {...rest}>{children}</AntdForm.List>;
};

export { useForm, useWatch } from "antd/es/form/Form";
export type { FormInstance } from "antd/es/form/Form";
