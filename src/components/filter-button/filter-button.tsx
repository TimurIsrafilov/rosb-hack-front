import { Link, NavLink, useLocation } from "react-router-dom";

import styles from "./filter-button.module.css";

// import open_up_icon from "../../images/open_up_icon.svg";
// import avatar from "../../images/avatar.svg";
import { useState } from "react";

function FilterButton(props: any) {
  // const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={props.handleMenuOpen}
      className={styles.filter_button}
    >
      <div className={styles.filter_button__title_container}>
        {/* <div className={styles.filter_button__search_button}>
          <svg className={styles.filter_button__search_icon}></svg>
        </div> */}
        <p className={styles.filter_button__title}>{props.label}</p>
      </div>

      <div className={styles.filter_button__open_button}>
        <svg
          className={
            props.isMenuOpen
              ? styles.filter_button__arrow_icon_open
              : styles.filter_button__arrow_icon_close
          }
        ></svg>
      </div>
    </button>
  );
}

export default FilterButton;
