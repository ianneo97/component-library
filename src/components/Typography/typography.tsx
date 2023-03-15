import { Typography as AntdTypography } from "antd";
import { TextProps as AntdTextProps } from "antd/es/typography/Text";
import { TitleProps as AntdTitleProps } from "antd/es/typography/Title";
import { LinkProps as AntdLinkProps } from "antd/es/typography/Link";
import "./typography.css";

export interface TextProps extends AntdTextProps {}
export interface TitleProps extends AntdTitleProps {
    description?: string;
}

export interface LinkProps extends AntdLinkProps {}

const Typography: React.FC<TextProps> = (props) => {
    return (
        <AntdTypography.Text {...props}>{props.children}</AntdTypography.Text>
    );
};

const Title: React.FC<TitleProps> = (props) => {
    return (
        <>
            <div className="lfx-typography-wrapper">
                <div className="lfx-typography-rect"></div>

                <div className="lfx-typography-inner-wrapper">
                    <AntdTypography.Title
                        {...props}
                        className="lfx-typography-title"
                    >
                        {props.children}
                    </AntdTypography.Title>

                    <AntdTypography.Text className="lfx-typography-description">
                        {props.description}
                    </AntdTypography.Text>
                </div>
            </div>
        </>
    );
};

const Link: React.FC<LinkProps> = (props) => {
    return (
        <>
            <AntdTypography.Link {...props}>
                {props.children}
            </AntdTypography.Link>
        </>
    );
};

export { Typography, Title, Link };
