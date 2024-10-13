import styles from "./info-panel.module.css";

import useCalculate from "../../hooks/calculate";

import InfoCard from "../info-card/info-card";

import { v4 as uuidv4 } from "uuid";

function InfoPanel(): React.JSX.Element {
  const {
    employeeNumber,
    employeeBusFactor,
    employeeKey,
    skillEducationRequest,
    skillEducationInProgress,
  } = useCalculate();

  const infoCards = [
    { number: employeeNumber.length, title: "Всего в команде" },
    { number: employeeBusFactor.length, title: "Бас-фактор" },
    { number: employeeKey.length, title: "Key-people" },
    { number: skillEducationRequest.length, title: "Запросы на обучение" },
    { number: skillEducationInProgress.length, title: "Учатся" },
  ];

  return (
    <div className={styles.info_panel}>
      {infoCards.map((item) => (
        <InfoCard number={item.number} title={item.title} key={uuidv4()} />
      ))}
    </div>
  );
}

export default InfoPanel;
