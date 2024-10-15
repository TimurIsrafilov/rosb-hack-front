import styles from "./team.module.css";

import Filter from "../../components/filter/filter";
import InfoPanel from "../../components/info-panel/info-panel";
import CustomRadar from "../../components/radar/radar";

function Team(): React.JSX.Element {
  return (
    <div className={styles.team}>
      <InfoPanel />
      <Filter />
      <div className={styles.team__radar_container}>
        <CustomRadar type={"Hard"} />
        <CustomRadar type={"Soft"} />
      </div>
    </div>
  );
}

export default Team;
