import { Switch as AntdSwitch, SwitchProps as AntdSwitchProps } from "antd";
import "./switch.css";

export interface SwitchProps extends AntdSwitchProps {}

const Switch: React.FC<SwitchProps> = (props) => {
    return (
        <AntdSwitch {...props} className={`lfx-switch ${props.className}`} />
    );
};

export { Switch };
