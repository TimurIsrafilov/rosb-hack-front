import BarPanel from "../../components/bar-panel/bar-panel";
import GradePanel from "../../components/grade-panel/grade-panel";

import InfoPanel from "../../components/info-panel/info-panel";
import LevelPanel from "../../components/level-panel/level-panel";
import SkillsPanel from "../../components/skills-panel/skills-panel";
import WorkersPanel from "../../components/workers-panel/workers-panel";
import styles from "./company.module.css";

function Company(): React.JSX.Element {
  return (
    <div className={styles.company}>
      <InfoPanel />
      <div className={styles.company__graphics_container}>
        <div className={styles.company__grade_container}>
          <GradePanel />
          <p className={styles.company__grade_title}>Грейд/чел</p>
        </div>
        <LevelPanel />
        <div className={styles.company__skills_container}>
          <SkillsPanel />
          <WorkersPanel />
        </div>
      </div>
      <div className={styles.company__bar_container}>
        <BarPanel />
      </div>
    </div>
  );
}

export default Company;
