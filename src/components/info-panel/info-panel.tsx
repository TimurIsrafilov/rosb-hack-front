import InfoCard from "../info-card/info-card";
import styles from "./info-panel.module.css";

import { v4 as uuidv4 } from "uuid";

function InfoPanel(props: any) {
  const infoCards = [
    { number: 100, title: "Всего в команде" },
    { number: 53, title: "Бас-фактор" },
    { number: 77, title: "Key-people" },
    { number: 53, title: "Запросы на обучение" },
    { number: 11, title: "Учатся" },
  ];

  return (
    <div className={styles.info_panel}>
      {infoCards.map((item) => (
        <InfoCard
          // @ts-ignore
          number={item.number}
          title={item.title}
          key={uuidv4()}
        />
      ))}
    </div>
  );
}

export default InfoPanel;
