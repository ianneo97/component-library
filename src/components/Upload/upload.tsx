import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
    Upload as AntdUpload,
    UploadFile,
    UploadProps as AntdUploadProps,
    message,
} from "antd";
import { Typography } from "../Typography";
import "./upload.css";
import { useMemo } from "react";

export interface UploadProps extends AntdUploadProps {
    showUploadList?: boolean;
    files?: UploadFile<any>[];
    setFiles?: (files: UploadFile<any>[]) => void;
}

export interface UploadBoxProps extends UploadProps {
    uploadBoxText?: string;
}

const Upload: React.FC<UploadProps> = (props) => {
    const fileTypes = useMemo(() => {
        if (props.accept === "*") {
            return false;
        }

        if (props.accept) {
            return props.accept.split(",");
        }

        return ["image/jpg", "image/png", "image/jpeg"];
    }, [props?.accept]);

    return (
        <AntdUpload
            {...props}
            showUploadList={props.showUploadList ? props.showUploadList : true}
            beforeUpload={
                props.beforeUpload
                    ? props.beforeUpload
                    : (file) => {
                          if (!fileTypes) return false;

                          const isSupported = fileTypes?.includes(file.type);

                          if (!isSupported) {
                              message.error("Unsupported file type");
                          }

                          return isSupported ? false : AntdUpload.LIST_IGNORE;
                      }
            }
            fileList={props.fileList}
            accept={props.accept ? props.accept : "image/jpg,image/png"}
            multiple={props.multiple ? props.multiple : true}
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
    const fileTypes = useMemo(() => {
        if (props.accept === "*") {
            return false;
        }

        if (props.accept) {
            return props.accept.split(",");
        }

        return ["image/jpg", "image/png", "image/jpeg"];
    }, [props?.accept]);

    return (
        <AntdUpload
            {...props}
            multiple={props.multiple ? props.multiple : true}
            listType="picture-card"
            beforeUpload={
                props.beforeUpload
                    ? props.beforeUpload
                    : (file) => {
                          if (!fileTypes) return false;

                          const isSupported = fileTypes?.includes(file.type);

                          if (!isSupported) {
                              message.error("Unsupported file type");
                          }

                          return isSupported ? false : AntdUpload.LIST_IGNORE;
                      }
            }
            accept={props.accept ? props.accept : "image/jpg,image/png"}
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

const UploadBox: React.FC<UploadBoxProps> = (props) => {
    const fileTypes = useMemo(() => {
        if (props.accept === "*") {
            return false;
        }

        if (props.accept) {
            return props.accept.split(",");
        }

        return ["image/jpg", "image/png", "image/jpeg"];
    }, [props?.accept]);

    return (
        <AntdUpload.Dragger
            {...props}
            accept={props.accept ? props.accept : "image/jpg,image/png"}
            multiple
            beforeUpload={
                props.beforeUpload
                    ? props.beforeUpload
                    : (file) => {
                          if (!fileTypes) return false;
                          console.log(fileTypes);
                          console.log(file.type);

                          const isSupported = fileTypes?.includes(file.type);

                          if (!isSupported) {
                              message.error("Unsupported file type");
                          }

                          return isSupported ? false : AntdUpload.LIST_IGNORE;
                      }
            }
            onChange={
                props.onChange
                    ? props.onChange
                    : (arg) => {
                          if (arg.file.status === "error") return;
                          if (!props.setFiles) return;

                          props.setFiles(arg.fileList);
                      }
            }
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
                        {props.uploadBoxText
                            ? props.uploadBoxText
                            : "Supported file types are PDF, JPG, PNG"}
                    </Typography>
                </div>
            </div>
        </AntdUpload.Dragger>
    );
};

const UploadLink: React.FC<UploadProps> = (props) => {
    const fileTypes = useMemo(() => {
        if (props.accept === "*") {
            return false;
        }

        if (props.accept) {
            return props.accept.split(",");
        }

        return ["image/jpg", "image/png", "image/jpeg"];
    }, [props?.accept]);

    return (
        <AntdUpload
            {...props}
            accept={props.accept ? props.accept : "image/jpg,image/png"}
            beforeUpload={
                props.beforeUpload
                    ? props.beforeUpload
                    : (file) => {
                          if (!fileTypes) return false;
                          console.log(fileTypes);
                          console.log(file.type);

                          const isSupported = fileTypes?.includes(file.type);

                          if (!isSupported) {
                              message.error("Unsupported file type");
                          }

                          return isSupported ? false : AntdUpload.LIST_IGNORE;
                      }
            }
            onChange={
                props.onChange
                    ? props.onChange
                    : (arg) => {
                          if (arg.file.status === "error") return;
                          if (!props.setFiles) return;

                          props.setFiles(arg.fileList);
                      }
            }
        ></AntdUpload>
    );
};

export { Upload, UploadCard, UploadBox, UploadLink };
