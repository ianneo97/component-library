import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
    Upload as AntdUpload,
    UploadFile,
    UploadProps as AntdUploadProps,
} from "antd";
import { Typography } from "../Typography";
import "./upload.css";

export interface UploadProps extends AntdUploadProps {
    showUploadList?: boolean;
    files?: UploadFile<any>[];
    setFiles?: (files: UploadFile<any>[]) => void;
}

const Upload: React.FC<UploadProps> = (props) => {
    return (
        <AntdUpload
            showUploadList={false}
            beforeUpload={() => false}
            fileList={props.fileList}
            accept=".jpg,.jpeg,.png"
            multiple
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

const UploadCard: React.FC<UploadProps> = (props) => {
    return (
        <AntdUpload
            {...props}
            multiple={true}
            listType={"picture-card"}
            beforeUpload={() => false}
            accept=".pdf,.jpg,.jpeg,.png"
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

const UploadBox: React.FC<UploadProps> = (props) => {
    return (
        <AntdUpload.Dragger
            {...props}
            accept=".jpg,.jpeg,.png"
            multiple
            beforeUpload={() => false}
            onChange={(arg) => {
                if (!props.setFiles) return;

                props.setFiles(arg.fileList);
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "12px",
                }}
            >
                <UploadOutlined style={{ fontSize: "42px" }} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                    }}
                >
                    <Typography style={{ fontSize: "16px" }}>
                        Select a file or drag it here
                    </Typography>
                    <Typography style={{ fontSize: "12px" }}>
                        Supported file types are PDF, JPG, PNG
                    </Typography>
                </div>
            </div>
        </AntdUpload.Dragger>
    );
};

const UploadLink: React.FC<UploadProps> = (props) => {
    return <AntdUpload {...props} accept=".jpg,.jpeg,.png"></AntdUpload>;
};

export { Upload, UploadCard, UploadBox, UploadLink };
