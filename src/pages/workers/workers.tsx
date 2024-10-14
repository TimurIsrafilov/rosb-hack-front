import styles from "./workers.module.css";

import Filter from "../../components/filter/filter";
import InfoPanel from "../../components/info-panel/info-panel";
import RadarEmployee from "../../components/radar-employee/radar-employee";

function Workers(): React.JSX.Element {
  return (
    <div className={styles.workers}>
      <InfoPanel />
      <Filter />
      <div className={styles.workers__radar_container}>
        <RadarEmployee type={"Hard"} />
        <RadarEmployee type={"Soft"} />
      </div>
    </div>
  );
}

export default Workers;
