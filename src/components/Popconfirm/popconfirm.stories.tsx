import { Button } from "../Button";
import { Popconfirm } from "./popconfirm";

export default {
    title: "Popconfirm",
    component: Popconfirm,
};

export const Default = () => {
    const onConfirm = () => {
        console.log("confirmed");
    };

    return (
        <Popconfirm
            title="Delete the task?"
            onConfirm={onConfirm}
            onCancel={() => console.log("Cancelled")}
        >
            <Button mode="comment">Delete</Button>
        </Popconfirm>
    );
};
