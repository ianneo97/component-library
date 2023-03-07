import { Col, Row } from "./row";

export default {
    title: "Row",
    component: Row,
};

export const Default = () => {
    return (
        <Row>
            <Col span={12}>div </Col>
            <Col span={12}>div </Col>
        </Row>
    );
};
