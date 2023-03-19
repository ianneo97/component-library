import { Upload } from "./upload";

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
