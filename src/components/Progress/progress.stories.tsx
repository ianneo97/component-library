import { Progress } from "./progress";

export default {
    title: "Progress",
    component: Progress,
};

export const Default = () => {
    return (
        <>
            <Progress percent={0} />
            <Progress percent={25} />
            <Progress percent={100} />
        </>
    );
};
