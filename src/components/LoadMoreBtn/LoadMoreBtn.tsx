import { FC } from "react";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.moreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
