import styles from "./skills-panel.module.css";

import { skillsData } from "./../../utils/mockData";

function SkillsPanel(): React.JSX.Element {
  return (
    <div className={styles.skills_panel}>
      <h3 className={styles.skills_panel__title}>{skillsData.title}</h3>

      <h4 className={styles.skills_panel__item}>
        {skillsData.soft_skills.title}
      </h4>

      <div className={styles.skills_panel__container}>
        <p className={styles.skills_panel__text}>
          {skillsData.soft_skills.item}
        </p>
        <div className={styles.skills_panel__red_bar}></div>
        <p className={styles.skills_panel__text}>
          {skillsData.soft_skills.value}
        </p>
      </div>

      <h4 className={styles.skills_panel__item}>
        {skillsData.hard_skills.title}
      </h4>

      <div className={styles.skills_panel__container}>
        <p className={styles.skills_panel__text}>
          {skillsData.hard_skills.item}
        </p>
        <div className={styles.skills_panel__black_bar}></div>
        <p className={styles.skills_panel__text}>
          {skillsData.hard_skills.value}
        </p>
      </div>
    </div>
  );
}

export default SkillsPanel;
