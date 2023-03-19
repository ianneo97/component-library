import { Card as AntdCard, CardProps as AntdCardProps, Image, Tag } from "antd";
import { Typography } from "../Typography";
import "./card.css";

export interface CardProps extends AntdCardProps {}
export interface InfoCardProps extends AntdCardProps {
    icon?: string;
    infoTitle?: string;
    information?: React.ReactNode;
    tags: string[];
}

const Card: React.FC<CardProps> = (props) => {
    return <AntdCard {...props}>{props.children}</AntdCard>;
};

const InfoCard: React.FC<InfoCardProps> = (props) => {
    return (
        <AntdCard {...props} className={`lfx-info-card ${props.className}`}>
            <div className="info-main-container">
                <div className="icon-container">
                    <Image
                        className="icon-container"
                        src={
                            props.icon
                                ? props.icon
                                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        }
                    ></Image>
                </div>

                <div className="info-container">
                    <Typography style={{ fontSize: "24px", fontWeight: 400 }}>
                        {props.infoTitle}
                    </Typography>

                    {props.information}

                    <div className="info-tags-container">
                        {props.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </div>
                </div>
            </div>

            <div>Order information blocks</div>
        </AntdCard>
    );
};

export { Card, InfoCard };
