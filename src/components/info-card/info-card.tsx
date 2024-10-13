import styles from "./info-card.module.css";

interface InfoCardProps {
  number: number;
  title: string;
}

function InfoCard(props: InfoCardProps): React.JSX.Element {
  return (
    <div className={styles.info_card}>
      <p className={styles.info_card__number}>{props.number}</p>
      <p className={styles.info_card__title}>{props.title}</p>
    </div>
  );
}

export default InfoCard;
