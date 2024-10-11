import styles from "./info-card.module.css";

function InfoCard(props: any) {
  return (
    <div className={styles.info_card}>
      <p className={styles.info_card__number}>{props.number}</p>
      <p className={styles.info_card__title}>{props.title}</p>
    </div>
  );
}

export default InfoCard;
