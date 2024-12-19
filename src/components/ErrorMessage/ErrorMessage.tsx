import { FC } from "react";
import { ErrorMessageProps } from "./ErrorMessage.types";
import s from "./ErrorMessage.module.css";

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <div className={s.erMes}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
