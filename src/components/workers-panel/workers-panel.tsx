import { v4 as uuidv4 } from "uuid";

import styles from "./workers-panel.module.css";
import { workersData } from "../../utils/mockData";

function WorkersPanel(): React.JSX.Element {
  return (
    <div className={styles.workers_panel}>
      <h4 className={styles.workers_panel__item}>
        {workersData.title_best_workers}
      </h4>

      <div className={styles.workers_panel__container}>
        {workersData.best_workers.map((i) => (
          <div
            className={styles.workers_panel__worker_container}
            key={uuidv4()}
          >
            <p className={styles.workers_panel__text}>{i.title}</p>
            <div className={styles.workers_panel__red_bar}></div>
            <p className={styles.workers_panel__text}>{i.value}</p>
          </div>
        ))}
      </div>

      <h4 className={styles.workers_panel__item}>
        {workersData.title_worst_workers}
      </h4>

      <div className={styles.workers_panel__container}>
        {workersData.worst_workers.map((i) => (
          <div
            className={styles.workers_panel__worker_container}
            key={uuidv4()}
          >
            <p className={styles.workers_panel__text}>{i.title}</p>
            <div className={styles.workers_panel__black_bar}></div>
            <p className={styles.workers_panel__text}>{i.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkersPanel;
