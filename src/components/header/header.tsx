import { Link, NavLink, useLocation } from "react-router-dom";

import { Button } from "antd";

import styles from "./header.module.css";

function Header(): React.JSX.Element {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathTeamCreate = currentPath === "/team-create" ? true : false;

  return (
    <div className={styles.header}>
      <div className={styles.header__main_container}>
        <p className={styles.header__title}>Дашборд</p>
        <div className={styles.header__buttons_container}>
          <NavLink to="/team" className={styles.sidebar__link}>
            {({ isActive }) => (
              <Button
                className={styles.header__button}
                type={isActive ? "primary" : "text"}
                shape="round"
              >
                Навыки команды
              </Button>
            )}
          </NavLink>
          <NavLink to="/team-create" className={styles.sidebar__link}>
            {({ isActive }) => (
              <Button
                className={styles.header__button}
                type={isActive ? "primary" : "text"}
                shape="round"
              >
                Создание новой команды
              </Button>
            )}
          </NavLink>
        </div>
        <div className={styles.header__icons_container}>
          <Link to="/email" className={styles.sidebar__link}>
            <svg
              className={`${styles.header__icon} ${styles.header__icon_email}`}
            ></svg>
          </Link>
          <Link to="/announse" className={styles.sidebar__link}>
            <svg
              className={`${styles.header__icon} ${styles.header__icon_bell}`}
            ></svg>
          </Link>
          <Link to="/faq" className={styles.sidebar__link}>
            <svg
              className={`${styles.header__icon} ${styles.header__icon_question}`}
            ></svg>
          </Link>
        </div>
      </div>

      <div className={styles.header__menu_container}>
        {!pathTeamCreate && (
          <>
            <NavLink to="/" className={styles.header__menu_item_link}>
              {({ isActive }) => (
                <p
                  className={`${styles.header__menu_item}   ${
                    isActive && styles.header__menu_item_active
                  }`}
                >
                  Главная
                </p>
              )}
            </NavLink>
            <NavLink to="/team" className={styles.header__menu_item_link}>
              {({ isActive }) => (
                <p
                  className={`${styles.header__menu_item}   ${
                    isActive && styles.header__menu_item_active
                  }`}
                >
                  Навыки команды
                </p>
              )}
            </NavLink>
            <NavLink to="/workers" className={styles.header__menu_item_link}>
              {({ isActive }) => (
                <p
                  className={`${styles.header__menu_item}   ${
                    isActive && styles.header__menu_item_active
                  }`}
                >
                  Навыки сотрудника
                </p>
              )}
            </NavLink>
          </>
        )}

        {pathTeamCreate && (
          <NavLink to="/team-create" className={styles.header__menu_item_link}>
            {({ isActive }) => (
              <p
                className={`${styles.header__menu_item}   ${
                  isActive && styles.header__menu_item_active
                }`}
              >
                Создание новой команды
              </p>
            )}
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
