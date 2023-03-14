import { UploadFile } from "antd";
import { useState } from "react";
import { Upload } from "./upload";

export default {
    title: "Upload",
    component: Upload,
};

export const DefaultUpload = () => {
    return (
        <>
            <Upload>+ Upload now</Upload>
        </>
    );
};

export const UploadWithPictureCardType = () => {
    const [files, setFiles] = useState<UploadFile[]>([]);

    return (
        <>
            <Upload
                listType="picture-card"
                showUploadList={false}
                files={files}
                setFiles={setFiles}
            >
                + Upload Now
            </Upload>
        </>
    );
};
