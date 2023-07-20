import { Typography as AntdTypograhy, TypographyProps } from "antd";
import { LinkProps } from "antd/es/typography/Link";
import { ParagraphProps } from "antd/es/typography/Paragraph";
import { TextProps } from "antd/es/typography/Text";
import { TitleProps } from "antd/es/typography/Title";
import { CSSProperties } from "react";
import { COLOURS } from "../constant";

const subtitleStyle = {
    color: COLOURS.TEXT.Subtitle,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
};

const textStyle = (
    color: string = COLOURS.TEXT.Primary,
    strong: boolean = false
): CSSProperties => ({
    color: color,
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: strong ? 600 : 400,
    lineHeight: "normal",
    alignSelf: "center",
    wordBreak: "keep-all",
});

const linkStyle = (strong: boolean = false): CSSProperties => ({
    color: COLOURS.TEXT.Blue,
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: strong ? 600 : 400,
    lineHeight: "normal",
    alignSelf: "center",
});

const titleStyle = (isHeader: boolean): CSSProperties => ({
    color: COLOURS.TEXT.Primary,
    fontFamily: "Open Sans",
    fontSize: isHeader ? "24px" : "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    alignSelf: "center",
});

export interface ITextProps extends TypographyProps {
    children: React.ReactNode;
}

export const TextBase: React.FC<TextProps> = ({ children, ...rest }) => {
    return <AntdTypograhy.Text {...rest}>{children}</AntdTypograhy.Text>;
};

export const TitleBase: React.FC<TitleProps> = ({ children, ...rest }) => {
    return <AntdTypograhy.Title {...rest}>{children}</AntdTypograhy.Title>;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, ...rest }) => {
    return (
        <AntdTypograhy.Paragraph {...rest}>{children}</AntdTypograhy.Paragraph>
    );
};

export const LinkBase: React.FC<LinkProps> = ({ children, ...rest }) => {
    return <AntdTypograhy.Link {...rest}>{children}</AntdTypograhy.Link>;
};

export const Subtitle: React.FC<TextProps> = ({ children, ...rest }) => {
    return (
        <TextBase {...rest} style={subtitleStyle}>
            {children}
        </TextBase>
    );
};

export const Text: React.FC<TextProps> = ({ children, color, ...rest }) => {
    return (
        <TextBase {...rest} style={textStyle(color, false)}>
            {children}
        </TextBase>
    );
};

export const TextStrong: React.FC<TextProps> = ({
    children,
    color,
    ...rest
}) => {
    return (
        <TextBase {...rest} style={textStyle(color, true)}>
            {children}
        </TextBase>
    );
};

export const Title: React.FC<TextProps> = ({ children, ...rest }) => {
    return (
        <TextBase {...rest} style={titleStyle(true)}>
            {children}
        </TextBase>
    );
};

export const SubheaderTitle: React.FC<TextProps> = ({ children, ...rest }) => {
    return (
        <TextBase {...rest} style={titleStyle(false)}>
            {children}
        </TextBase>
    );
};

export const Link: React.FC<LinkProps> = ({ children, ...rest }) => {
    return (
        <LinkBase {...rest} style={linkStyle(false)}>
            {children}
        </LinkBase>
    );
};

export const LinkStrong: React.FC<LinkProps> = ({ children, ...rest }) => {
    return (
        <LinkBase {...rest} style={linkStyle(true)}>
            {children}
        </LinkBase>
    );
};
