import { Card } from "../Card";
import { Descriptions } from "./descriptions";

export default {
    title: "Descriptions",
    component: Descriptions,
};

export const Default = () => {
    const items = [
        { label: "Entity Name", value: "John" },
        { label: "Age", value: "" },
        { label: "Address", value: "123 Main St" },
        { label: "City", value: "New York" },
    ];

    // return <Descriptions items={items} />;
    return (
        <Card>
            <Descriptions items={items} />
        </Card>
    );
};
