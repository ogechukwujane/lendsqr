import { CoinsIcon, LoanIcon, PeopleIcon, UserIcon } from "../../assets";
import { Counter } from "../../components";
import styles from "../../styles/pages/users.module.scss";
import { UserTable } from "./userTable";

export const Users = () => {
  return (
    <div className={styles.Users_container}>
      <p className={styles.header}>Users</p>
      <div className={styles.flexbox}>
        <Counter
          icon={<UserIcon />}
          title={"Users"}
          counts={"2,400"}
          bg={"#df18ff10"}
        />
        <Counter
          icon={<PeopleIcon />}
          title={"Active users"}
          counts={"2,450"}
          bg={"#5718ff10"}
        />
        <Counter
          icon={<LoanIcon />}
          title={"Users with loans"}
          counts={"1,509"}
          bg={"#f55f4410"}
        />
        <Counter
          icon={<CoinsIcon />}
          title={"Users with savings"}
          counts={"1,800"}
          bg={"#ff336610"}
        />
      </div>

      <div className="table_wrap">
        <UserTable />
      </div>
    </div>
  );
};
