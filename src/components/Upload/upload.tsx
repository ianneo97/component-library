import { Upload as AntdUpload, UploadFile } from "antd";

export interface UploadProps {
    type?: "text" | "picture" | "picture-card" | "picture-circle";
    children?: React.ReactNode;
    files?: UploadFile<any>[];
    setFiles?: (files: UploadFile<any>[]) => void;
}

const Upload: React.FC<UploadProps> = (props) => {
    return (
        <AntdUpload
            multiple={true}
            listType={props.type}
            beforeUpload={() => false}
            showUploadList={false}
            fileList={props.files}
            onChange={(arg) => {
                if (arg.file.status === "removed") return;
                if (!props.setFiles) return;

                props.setFiles(arg.fileList);
            }}
        >
            {props.children}
        </AntdUpload>
    );
};

export { Upload };
