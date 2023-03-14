import {
    Radio as AntdRadio,
    RadioGroupProps as AntdRadioGroupProps,
    Typography,
} from "antd";

import "./radio.css";

interface RadioItem {
    label: string;
    value: string;
}

interface RadioProps extends AntdRadioGroupProps {
    items: RadioItem[];
}

const RadioGroup: React.FC<RadioProps> = (props) => {
    return (
        <>
            <AntdRadio.Group {...props} className="lfx-radio">
                {props.items.map((item) => (
                    <AntdRadio.Button key={item.value} value={item.value}>
                        <Typography>{item.label}</Typography>
                    </AntdRadio.Button>
                ))}
            </AntdRadio.Group>
        </>
    );
};

export { RadioGroup };
export type { RadioProps };
