import { useState } from "react";
import {
  ChevronDownIcon,
  CloseIcon,
  NotificationIcon,
  SearchIcon,
  logo,
} from "../../assets";
import styles from "../../styles/components/navbar.module.scss";
import { useMedia } from "../../utils";

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(false);
  const { isDesktop } = useMedia();

  const clearSearch = () => {
    setSearchValue("");
    setSearch(false);
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.logo_wrap}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.nav_content}>
        {(isDesktop || search) && (
          <div className={styles.search_wrap}>
            <input
              type="text"
              placeholder="Search for anything"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className={styles.close_icon_wrap} onClick={clearSearch}>
              <CloseIcon />
            </div>
            <button>
              <SearchIcon />
            </button>
          </div>
        )}
        {!search && (
          <div className={styles.profile_section}>
            <div
              className={styles.searchWrap}
              onClick={() => setSearch(!search)}
            >
              <SearchIcon />
            </div>
            <p className={styles.docs}>Docs</p>
            <NotificationIcon />
            <div className={styles.profile}>
              <div className={styles.profile_image}></div>
              <div className={styles.name_wrap}>
                <p className={styles.name}>Adaeze</p>
                <ChevronDownIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
