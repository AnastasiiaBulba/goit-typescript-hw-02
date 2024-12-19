import { ImageType } from "../../types/common.types";

export interface ImageGalleryProps {
  images: ImageType[];
  onImageClick: (image: ImageType) => void;
}
