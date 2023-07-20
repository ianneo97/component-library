import { useEffect, useState } from "react";
import { Upload, UploadBox, UploadCard } from "./upload";

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
    const [files, setFiles] = useState<any>([
        {
            id: 55,
            docId: 43,
            document: "BILL_OF_LADING",
            edited: false,
            file: {
                assetName:
                    "uploads/5b48b95d-f110-4a25-bd36-8efa0991d0d7/salesOrder/11012b0b-1940-4b34-8463-0b9b12b5e05f.pdf",
                container: "temporary",
                autoResign: false,
                contentType: "application/pdf",
                originalName: "IAN NEO HUNG TIEN_EA-2022.pdf",
            },
        },
        {
            id: 55,
            docId: 46,
            document: "BILL_OF_LADING",
            edited: false,
            name: ",",
            file: {
                assetName:
                    "uploads/5b48b95d-f110-4a25-bd36-8efa0991d0d7/salesOrder/11012b0b-1940-4b34-8463-0b9b12b5e05f.pdf",
                container: "temporary",
                autoResign: false,
                contentType: "application/pdf",
                originalName: "IAN NEO HUNG TIEN_EA-2022.pdf",
            },
        },
    ]);

    useEffect(() => {
        console.log(files);
    }, [files]);
    return (
        <>
            <UploadBox
                fileList={files}
                setFiles={setFiles}
                // accept="application/pdf"
                // accept="*"
                accept="image/png,image/jpeg,image/jpg"
            />

            <UploadCard fileList={files} setFiles={setFiles} accept="*" />
        </>
    );
};
