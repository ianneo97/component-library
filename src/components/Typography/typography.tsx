import { Typography as AntdTypography } from "antd";
import { TextProps as AntdTextProps } from "antd/es/typography/Text";
import { TitleProps as AntdTitleProps } from "antd/es/typography/Title";

export interface TextProps extends AntdTextProps {}
export interface TitleProps extends AntdTitleProps {}

const Typography: React.FC<TextProps> = (props) => {
    return (
        <AntdTypography.Text {...props}>{props.children}</AntdTypography.Text>
    );
};

const Title: React.FC<TitleProps> = (props) => {
    return (
        <AntdTypography.Title {...props}>{props.children}</AntdTypography.Title>
    );
};

export { Typography, Title };
