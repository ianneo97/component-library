import { PlusOutlined } from "@ant-design/icons";
import {
    Upload as AntdUpload,
    UploadFile,
    UploadProps as AntdUploadProps,
} from "antd";
import "./upload.css";

export interface UploadProps extends AntdUploadProps {
    // type?: "text" | "picture" | "picture-card" | "picture-circle";
    // children?: React.ReactNode;
    showUploadList?: boolean;
    files?: UploadFile<any>[];
    setFiles?: (files: UploadFile<any>[]) => void;
}

const Upload: React.FC<UploadProps> = (props) => {
    return (
        <AntdUpload
            {...props}
            multiple={true}
            listType={"picture-card"}
            beforeUpload={() => false}
            showUploadList={props.showUploadList}
            fileList={props.fileList}
            onChange={(arg) => {
                if (arg.file.status === "removed") return;
                if (!props.setFiles) return;

                props.setFiles(arg.fileList);
            }}
            className={`lfx-upload ${props.className}`}
        >
            <PlusOutlined />
        </AntdUpload>
    );
};

export { Upload };
