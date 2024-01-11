import { ComponentPropsWithoutRef, FC, useState } from "react";
import styles from "../../styles/components/input.module.scss";

type InputProp = {
  label?: string;
  errorMessage?: string;
} & ComponentPropsWithoutRef<"input">;

export const InputComp: FC<InputProp> = ({ label, errorMessage, ...rest }) => {
  return (
    <div className={styles.Input}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.input_wrap}>
        <input type="text" className={styles.input} {...rest} />
      </div>
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  );
};

export const PasswordComp: FC<InputProp> = ({
  label,
  errorMessage,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.Input}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.input_wrap}>
        <input type={showPassword ? "text" : "password"} {...rest} />
        <p
          className={styles.password_icon}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </p>
      </div>
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  );
};
