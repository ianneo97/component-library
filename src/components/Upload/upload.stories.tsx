import { useEffect, useState } from "react";
import { Upload, UploadBox } from "./upload";

export default {
    title: "Upload",
    component: Upload,
};

export const UploadModeActive = () => {
    return (
        <>
            <Upload>+ Upload now</Upload>
        </>
    );
};

export const Draggerr = () => {
    const [files, setFiles] = useState<any>();

    useEffect(() => {
        console.log(files);
    }, [files]);
    return (
        <>
            <UploadBox fileList={files} setFiles={setFiles} />
        </>
    );
};
