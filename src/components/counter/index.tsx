import { FC, ReactNode } from "react";
import styles from "../../styles/components/counter.module.scss";

interface ICounter {
  icon: ReactNode;
  title: string;
  counts: string;
  bg: string;
}
export const Counter: FC<ICounter> = ({ bg, icon, title, counts }) => {
  return (
    <div className={styles.Counter}>
      <div
        className={[styles.icon_wrap, styles[title]].join(" ")}
        style={{ background: bg }}
      >
        {icon}
      </div>
      <div className={styles.title}>{title}</div>
      <p className={styles.counts}>{counts}</p>
    </div>
  );
};
