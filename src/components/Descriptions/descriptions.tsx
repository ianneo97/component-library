import {
    Descriptions as AntdDescriptions,
    DescriptionsProps as AntdDescriptionProps,
} from "antd";

export interface DescriptionItemProps {
    label: string;
    value?: string;
}
export interface DescriptionsProps extends AntdDescriptionProps {
    items: DescriptionItemProps[];
}

const Descriptions: React.FC<DescriptionsProps> = (
    props: DescriptionsProps
) => {
    return (
        <AntdDescriptions {...props}>
            {props.items.map((item) => (
                <AntdDescriptions.Item label={item.label}>
                    {item.value ? item.value : "-"}
                </AntdDescriptions.Item>
            ))}
        </AntdDescriptions>
    );
};

export { Descriptions };
