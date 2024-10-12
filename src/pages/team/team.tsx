import Filter from "../../components/filter/filter";
import InfoPanel from "../../components/info-panel/info-panel";
import styles from "./team.module.css";

function Team() {
  return (
    <div className={styles.team}>
      <InfoPanel />
      <Filter />
    </div>
  );
}

export default Team;
