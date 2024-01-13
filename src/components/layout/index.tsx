import { Navbar } from "../navbar";
import { SideBar } from "../sidebar";
import styles from "../../styles/components/layout.module.scss";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.content_container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
