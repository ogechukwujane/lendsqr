import { loginBg, logo } from "../../assets";
import { ButtonComp, InputComp, PasswordComp } from "../../components";
import styles from "../../styles/pages/login.module.scss";
import { useFormik } from "formik";
import { loginValidation } from "./validation";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("./dashboard/users");
  };

  const { values, handleSubmit, touched, errors, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit,
  });
  return (
    <div className={styles.Login}>
      <div className={styles.content_container}>
        <div className={styles.image_Wrapper}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <img src={loginBg} alt="Image" />
        </div>
        <div className={styles.form_container}>
          <div className={styles.form_content}>
            <h1 className={styles.title}>Welcome!</h1>
            <p className={styles.subtitle}>Enter details to login</p>
            <form onSubmit={handleSubmit}>
              <InputComp
                placeholder="Email"
                value={values.email}
                onChange={handleChange("email")}
                errorMessage={touched.email ? errors.email : ""}
              />
              <PasswordComp
                placeholder="Password"
                value={values.password}
                onChange={handleChange("password")}
                errorMessage={touched.password ? errors.password : ""}
              />
              <p className={styles.forget_password}>Forgot Password?</p>
              <ButtonComp
                text="LOG IN"
                disabled={!values.password || !values.email}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
