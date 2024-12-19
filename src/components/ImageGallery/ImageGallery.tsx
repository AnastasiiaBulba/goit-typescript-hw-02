import { FC } from "react";
import { ImageGalleryProps } from "./ImageGallery.types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className={s.wrapperGallery}>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id} className={s.galleryItem}>
            <ImageCard image={image} onClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
