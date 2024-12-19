import { ImageType } from "../../types/common.types";

export interface ImageCardProps {
  image: ImageType;
  onClick: (image: ImageType) => void;
}
