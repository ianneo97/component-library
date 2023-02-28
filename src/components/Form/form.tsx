import { Form as AntdForm, FormInstance } from "antd";

export interface FormItemProps {
    label: string;
    name: string;
    children: React.ReactNode;
}

export interface FormProps<T = any> {
    form: FormInstance<T>;
    items: FormItemProps[];
}

const Form: React.FC<FormProps> = (props) => {
    return (
        <>
            <AntdForm form={props.form}>
                {props.items.map((item) => (
                    <AntdForm.Item label={item.label} name={item.name}>
                        {item.children}
                    </AntdForm.Item>
                ))}
            </AntdForm>
        </>
    );
};

function useForm(): [FormInstance] {
    return AntdForm.useForm();
}

export { Form };
export { useForm };
