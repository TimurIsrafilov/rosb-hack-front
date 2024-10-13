import Filter from "../../components/filter/filter";
import RadarEmployee from "../../components/radar-employee/radar-employee";

import CustomRadar from "../../components/radar/radar";
import styles from "./workers.module.css";

function Workers() {
  return (
    <div className={styles.workers}>
      <Filter />
      <div className={styles.workers__radar_container}>
        <RadarEmployee type={"Hard"} />
        <RadarEmployee type={"Soft"} />
      </div>
    </div>
  );
}

export default Workers;
