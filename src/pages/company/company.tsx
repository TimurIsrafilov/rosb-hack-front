import BarPanel from "../../components/bar-panel/bar-panel";
import GradePanel from "../../components/grade-panel/grade-panel";

import InfoPanel from "../../components/info-panel/info-panel";
import LevelPanel from "../../components/level-panel/level-panel";
import SkillsPanel from "../../components/skills-panel/skills-panel";
import WorkersPanel from "../../components/workers-panel/workers-panel";
import styles from "./company.module.css";

function Company() {
  const skillsData = {
    title: "Проблемные навыки",
    soft_skills: {
      title: "Soft skill",
      item: "Делегирование",
      value: 27,
    },
    hard_skills: {
      title: "Hard skill",
      item: "Навыки работы ",
      value: 20,
    },
  };

  return (
    <div className={styles.company}>
      <InfoPanel />
      <div className={styles.company__graphics_container}>
        {/* <GradePanel /> */}
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
        {/* <GradePanel1 /> */}
      </div>
    </div>
  );
}

export default Company;
