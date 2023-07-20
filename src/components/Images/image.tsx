import { Image as AntdImage, ImageProps as AntdImageProps } from "antd";
import "./image.css";

export interface ImageProps extends AntdImageProps {}
export interface GalleryProps {
    images?: string[];
    fallbackImage?: string;
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
                        src={props?.images?.[0] || props.fallbackImage}
                        width={
                            props.mainImageWidth
                                ? props.mainImageWidth + 20
                                : 220
                        }
                        height={"100%"}
                    />
                </div>

                <div className="sub-image-container">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Image
                            key={index + 1}
                            src={
                                props.images?.[index + 1] || props.fallbackImage
                            }
                            preview={props.images?.[index + 1] ? true : false}
                            loading="lazy"
                            placeholder
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
