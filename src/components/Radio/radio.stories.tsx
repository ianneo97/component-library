import { useState } from "react";
import { RadioGroup } from "./radio";

export default {
    title: "Radio",
    component: RadioGroup,
};

export const DefaultRadio = () => {
    const [selected, setSelected] = useState("option1");
    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
    ];

    const onChange = (e: any) => {
        setSelected(e.target.value);
    };

    return (
        <RadioGroup
            items={options}
            defaultValue={selected}
            onChange={onChange}
        ></RadioGroup>
    );
};
