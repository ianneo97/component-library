import { Collapse, CollapsePanel } from "./collapse";

export default {
    title: "Collapse",
    component: Collapse,
};

export const Default = () => {
    return (
        <Collapse>
            <CollapsePanel header="Test" key="1">
                Hi
            </CollapsePanel>
        </Collapse>
    );
};
