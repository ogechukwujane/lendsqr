import { NavLink } from "react-router-dom";
import styles from "../../styles/components/sidebar.module.scss";
import { navLinks } from "./links";
import { SidebarItem } from "./sidebarItem";
import { ChevronLeftIcon, ChevronRightIcon, UserIcon } from "../../assets";
import { useState } from "react";
import { useMedia } from "../../utils";

export const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isDesktop } = useMedia();

  return (
    <div
      className={styles.Sidebar_container}
      style={{ width: !isDesktop && showMenu ? "100%" : "unset" }}
    >
      <div
        className={styles.sideBar}
        style={{
          minWidth: showMenu ? "280px" : "0px",
          maxWidth: showMenu ? "unset" : "0px",
        }}
      >
        <div className={styles.menu_bar} onClick={() => setShowMenu(!showMenu)}>
          {!showMenu ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </div>
        <div className={styles.sidebar_content}>
          <div className={styles.link_wrap}>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                [styles.link, isActive && styles.active].join(" ")
              }
            >
              <UserIcon />
              <p>{"Dashboard"}</p>
            </NavLink>
          </div>
          {navLinks.map((link, index) => (
            <SidebarItem key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};
