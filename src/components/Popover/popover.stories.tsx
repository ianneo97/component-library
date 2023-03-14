import { Popover } from "antd";
import { Button } from "../Button";
// import { Popover } from "./popover";

export default {
    title: "Popover",
    component: Popover,
};

export const Default = () => {
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    return (
        <>
            <Popover content={content} title="Title" trigger="hover">
                <Button mode="comment">Hover me</Button>
            </Popover>
        </>
    );
};
