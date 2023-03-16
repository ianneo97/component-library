import { Steps as AntdSteps, StepsProps as AntdStepsProps } from "antd";
import "./steps.css";

export interface StepsProps extends AntdStepsProps {}

const Steps: React.FC<StepsProps> = (props) => {
    return (
        <>
            <AntdSteps
                {...props}
                size={props.size ? props.size : "small"}
                className={`lfx-steps ${props.className}`}
            />
        </>
    );
};

export { Steps };
