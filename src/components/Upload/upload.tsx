import {
    Upload as AntdUpload,
    UploadFile,
    UploadProps as AntdUploadProps,
} from "antd";

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
            multiple={true}
            listType={props.listType}
            beforeUpload={() => false}
            showUploadList={props.showUploadList}
            fileList={props.fileList}
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
