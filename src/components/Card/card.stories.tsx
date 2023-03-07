import { Card } from "./card";

export default {
    title: "Card",
    component: Card,
};

export const Default = () => {
    return (
        <>
            <Card title={"Card Title"}></Card>
        </>
    );
};
