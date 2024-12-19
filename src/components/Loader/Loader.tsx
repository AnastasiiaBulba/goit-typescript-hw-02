import { FC } from "react";
import { TailSpin } from "react-loader-spinner";
import { LoaderProps } from "./Loader.types";
import s from "./Loader.module.css";

const Loader: FC<LoaderProps> = ({ spinnerProps }) => {
  return (
    <div className={s.loader}>
      <TailSpin {...spinnerProps} />
    </div>
  );
};

export default Loader;
