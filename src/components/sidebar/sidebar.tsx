import { useState } from "react";

import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.css";

import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";

function Sidebar(): React.JSX.Element {
  const [isProductPointsActive, setProductPointsActive] = useState(false);
  const [isDesignPointsActive, setDesignPointsActive] = useState(false);
  const [isDashboardActive, setDashboardActive] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleProductPointsActive = () => {
    setProductPointsActive(!isProductPointsActive);
    setDashboardActive(false);
  };

  const handleDesignPointsActive = () => {
    setDesignPointsActive(!isDesignPointsActive);
    setDashboardActive(false);
  };

  const hamdleDashboardActive = () => {
    setProductPointsActive(false);
    setDesignPointsActive(false);
    setDashboardActive(!isDashboardActive);
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__vertical_container}>
        <div className={styles.sidebar__container}>
          <NavLink to="/" className={styles.sidebar__link}>
            <img className={styles.sidebar__logo} src={logo} alt="logo" />
          </NavLink>

          <NavLink to="/" className={styles.sidebar__link}>
            <svg
              className={`${styles.sidebar__button_icon} ${styles.sidebar__button_menu}`}
            ></svg>
          </NavLink>

          <NavLink to="/" className={styles.sidebar__link}>
            <svg
              className={`${styles.sidebar__button_icon} ${styles.sidebar__button_teams}`}
            ></svg>
          </NavLink>

          <NavLink to="/" className={styles.sidebar__link}>
            <svg
              className={`${styles.sidebar__button_icon} ${styles.sidebar__button_team}`}
            ></svg>
          </NavLink>

          <NavLink to="/" className={styles.sidebar__link}>
            <svg
              className={`${styles.sidebar__button_icon} ${styles.sidebar__button_settings}`}
            ></svg>
          </NavLink>
        </div>

        <div className={styles.sidebar__container}>
          <NavLink to="/" className={styles.sidebar__link}>
            <img className={styles.sidebar__avatar} src={avatar} alt="avatar" />
          </NavLink>

          <NavLink to="/" className={styles.sidebar__link}>
            <svg
              className={`${styles.sidebar__button_icon} ${styles.sidebar__button_info}`}
            ></svg>
          </NavLink>
        </div>
      </div>

      <div className={styles.sidebar__menu}>
        {!isMenuOpen && (
          <button
            type="button"
            onClick={handleMenuOpen}
            className={`${styles.sidebar__menu_button_icon} ${styles.sidebar__menu_button_open}`}
          ></button>
        )}

        {isMenuOpen && (
          <div className={styles.sidebar__menu_container}>
            <div className={styles.sidebar__menu_title_container}>
              <h1 className={styles.sidebar__menu_title}>StarMap</h1>
              <button
                type="button"
                onClick={handleMenuClose}
                className={`${styles.sidebar__menu_button_icon} ${styles.sidebar__menu_button_close}`}
              ></button>
            </div>

            <h2 className={styles.sidebar__menu_label}>Команды</h2>

            <div className={styles.sidebar__menu_points_container}>
              <button
                type="button"
                onClick={handleProductPointsActive}
                className={`${styles.sidebar__menu_point} ${
                  isProductPointsActive && styles.sidebar__menu_point_active
                }`}
              >
                <div className={styles.sidebar__menu_button_container}>
                  <svg
                    className={`${styles.sidebar__menu_button_icon} ${styles.sidebar__menu_button_product}`}
                  ></svg>
                  <p className={styles.sidebar__menu_point_button_title}>
                    Product Management
                  </p>
                </div>
                <svg
                  className={`${styles.sidebar__menu_button_icon} ${
                    isProductPointsActive
                      ? styles.sidebar__menu_button_minus
                      : styles.sidebar__menu_button_plus
                  }`}
                ></svg>
              </button>

              {isProductPointsActive && (
                <div className={styles.sidebar__menu_items_icons_container}>
                  <svg className={styles.sidebar__menu_items_icon}></svg>

                  <div className={styles.sidebar__menu_items_container}>
                    <NavLink to="/" className={styles.sidebar__menu_link}>
                      <p className={styles.sidebar__menu_item_button}>
                        Участники
                      </p>
                    </NavLink>

                    <NavLink to="/" className={styles.sidebar__menu_link}>
                      <p className={styles.sidebar__menu_item_button}>
                        Специальности
                      </p>
                    </NavLink>

                    <NavLink to="/" className={styles.sidebar__menu_link}>
                      <p
                        className={`${styles.sidebar__menu_item_button} ${
                          true && styles.sidebar__menu_item_button_active
                        } `}
                      >
                        Ревью команды
                      </p>
                      <svg className={styles.sidebar__menu_icon_dot}></svg>
                    </NavLink>

                    <NavLink to="/" className={styles.sidebar__menu_link}>
                      <p className={styles.sidebar__menu_item_button}>
                        Запросы на обучение
                      </p>
                    </NavLink>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={hamdleDashboardActive}
                className={`${styles.sidebar__menu_point} ${
                  isDashboardActive && styles.sidebar__menu_point_active
                }`}
              >
                <div className={styles.sidebar__menu_button_container}>
                  <svg
                    className={`${styles.sidebar__menu_button_icon} ${styles.sidebar__menu_button_dashboard}`}
                  ></svg>
                  <p className={styles.sidebar__menu_point_button_title}>
                    Дашборд
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={handleDesignPointsActive}
                className={`${styles.sidebar__menu_point} ${
                  isDesignPointsActive && styles.sidebar__menu_point_active
                }`}
              >
                <div className={styles.sidebar__menu_button_container}>
                  <svg
                    className={`${styles.sidebar__menu_button_icon} ${styles.sidebar__menu_button_design}`}
                  ></svg>
                  <p className={styles.sidebar__menu_point_button_title}>
                    Дизайнеры на фрилансе
                  </p>
                </div>
                <svg
                  className={`${styles.sidebar__menu_button_icon} ${
                    isDesignPointsActive
                      ? styles.sidebar__menu_button_minus
                      : styles.sidebar__menu_button_plus
                  }`}
                ></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
