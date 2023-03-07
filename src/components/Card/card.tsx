import { Card as AntdCard, CardProps as AntdCardProps } from "antd";

export interface CardProps extends AntdCardProps {}

const Card: React.FC<CardProps> = (props) => {
    return <AntdCard {...props}>{props.children}</AntdCard>;
};

export { Card };
