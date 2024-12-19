import { FC } from "react";
import ReactModal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";
import s from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  alt,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div>
        <img src={imageUrl} alt={alt} />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
