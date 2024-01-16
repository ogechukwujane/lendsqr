import { NavLink } from "react-router-dom";
import styles from "../../styles/components/sidebar.module.scss";
import { FC, ReactNode } from "react";

interface ISidebarItem {
  name: string;
  onClick: () => void;
  menus: { icon: ReactNode; title: string; url: string }[];
}
export const SidebarItem: FC<ISidebarItem> = ({ name, menus, onClick }) => {
  return (
    <div>
      <div className={styles.toggle_button}>
        <p className={styles.title}>{name}</p>
      </div>
      <div className={styles.link_wrap}>
        {menus.map(({ icon, title, url }, index) => (
          <NavLink
            key={index}
            to={url}
            onClick={onClick}
            className={({ isActive }) =>
              [styles.link, isActive && styles.active].join(" ")
            }
          >
            {icon}
            <p>{title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
