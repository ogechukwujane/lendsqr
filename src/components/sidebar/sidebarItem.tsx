import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "../../assets";
import styles from "../../styles/components/sidebar.module.scss";
import { navLinks } from "./links";

export const SidebarItem = ({ name, menus }: (typeof navLinks)[0]) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div
        className={styles.toggle_button}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p className={styles.title}>{name}</p>
        <ChevronDownIcon />
      </div>
      {showDropdown && (
        <div className={styles.link_wrap}>
          {menus.map(({ icon, title, url }, index) => (
            <NavLink
              key={index}
              to={url}
              className={({ isActive }) =>
                [styles.link, isActive && styles.active].join(" ")
              }
            >
              {icon}
              <p>{title}</p>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
