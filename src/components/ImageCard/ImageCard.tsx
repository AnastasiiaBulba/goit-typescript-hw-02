import { FC } from "react";
import { ImageCardProps } from "./ImageCard.types";
import s from "./ImageCard.module.css";

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.thumb}
        alt={image.alt_description}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
