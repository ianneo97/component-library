import { Tag as AntdTag, TagProps as AntdTagProps } from "antd";
import "./tag.css";

export interface TagProps extends AntdTagProps {}

const Tag: React.FC<TagProps> = (props) => {
    return <AntdTag {...props} className={`lfx-tag ${props.className}`} />;
};

export { Tag };
