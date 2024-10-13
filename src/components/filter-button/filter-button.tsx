import styles from "./filter-button.module.css";

interface FilterButtonProps {
  handleMenuOpen: () => void;
  label: string;
  isMenuOpen: boolean;
}

function FilterButton(props: FilterButtonProps): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={props.handleMenuOpen}
      className={styles.filter_button}
    >
      <div className={styles.filter_button__title_container}>
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
