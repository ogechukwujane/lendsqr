import { NavLink } from "react-router-dom";
import styles from "../../styles/components/sidebar.module.scss";
import { navLinks } from "./links";
import { SidebarItem } from "./sidebarItem";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "../../assets";
import { useEffect, useState } from "react";
import { useMedia } from "../../utils";

export const SideBar = () => {
  const { isDesktop } = useMedia();
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    !isDesktop ? setShowMenu(false) : setShowMenu(true);
  }, [isDesktop]);

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
              to={"/"}
              onClick={() => (!isDesktop ? setShowMenu(false) : {})}
              className={({ isActive }) =>
                [styles.link, isActive && styles.active].join(" ")
              }
            >
              <UserIcon />
              <p>{"Switch Organization"}</p>
              <ChevronDownIcon />
            </NavLink>
            <NavLink
              to={"/"}
              onClick={() => (!isDesktop ? setShowMenu(false) : {})}
              className={({ isActive }) =>
                [styles.link, isActive && styles.active].join(" ")
              }
            >
              <UserIcon />
              <p>{"Dashboard"}</p>
            </NavLink>
          </div>
          {navLinks.map((link, index) => (
            <SidebarItem
              key={index}
              onClick={() => (!isDesktop ? setShowMenu(false) : {})}
              name={link.name}
              menus={link.menus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
