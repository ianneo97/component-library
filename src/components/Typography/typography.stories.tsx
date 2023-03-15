import { Title, Typography } from "./typography";

export default {
    title: "Typography",
    component: Typography,
};

export const Default = () => {
    return (
        <>
            <Title level={3} description="View and Manage Business Partners">
                Partners
            </Title>
        </>
    );
};
