import { Button } from "./button";

export default {
    title: "Button",
    component: Button,
};

export const DefaultButton = () => {
    return (
        <Button title="Test" type="primary">
            Click Me!
        </Button>
    );
};

export const DisabledButton = () => {
    return (
        <Button title="Test" type="primary" disabled>
            Click Me!
        </Button>
    );
};

export const LoadingButton = () => {
    return (
        <Button type="primary" loading>
            Click Me!
        </Button>
    );
};

export const DangerButton = () => {
    return (
        <Button title="Test" type="primary" danger>
            Click Me!
        </Button>
    );
};
