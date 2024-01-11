import { ComponentPropsWithoutRef, FC } from "react";
import style from "../../styles/components/button.module.scss";

type ButtonProp = {
  text: string;
} & ComponentPropsWithoutRef<"button">;

export const ButtonComp: FC<ButtonProp> = ({ text, ...rest }) => {
  return (
    <button {...rest} className={style.Button}>
      {text}
    </button>
  );
};
