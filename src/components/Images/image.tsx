import { Image as AntdImage, ImageProps as AntdImageProps } from "antd";
import "./image.css";

export interface ImageProps extends AntdImageProps {}
export interface GalleryProps {
    images?: string[];
    mainImageWidth?: number;
}

const Image: React.FC<ImageProps> = (props) => {
    return <AntdImage {...props} />;
};

const Gallery: React.FC<GalleryProps> = (props) => {
    return (
        <>
            <div className="lfx-image">
                <div className="main-image-container">
                    <Image
                        src={props?.images?.[0] || ""}
                        width={
                            props.mainImageWidth
                                ? props.mainImageWidth + 20
                                : 220
                        }
                    />
                </div>

                <div className="sub-image-container">
                    {props.images?.map((x) => (
                        <Image
                            src={x}
                            width={
                                props.mainImageWidth
                                    ? props.mainImageWidth / 4
                                    : 50
                            }
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export { Image, Gallery };
