import { Steps } from "./steps";

export default {
    title: "Steps",
    component: Steps,
};

export const Default = () => {
    const steps = ["Requried Fields", "Optional Fields", "Review"];
    return (
        <Steps
            items={steps.map((step) => ({ title: step }))}
            direction="vertical"
        />
    );
};
