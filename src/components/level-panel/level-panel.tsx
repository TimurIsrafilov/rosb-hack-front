import styles from "./level-panel.module.css";

import { PieChart, Pie, Cell, Tooltip, PieLabelRenderProps } from "recharts";

import { levelData, levelColors } from "../../utils/mockData";

function LevelPanel(): React.JSX.Element {
  const renderLabel = (props: PieLabelRenderProps) => {
    const { name, value } = props;
    return `${name}: ${value}%`;
  };

  return (
    <div className={styles.level_panel}>
      <div className={styles.level_panel__title}>Уровень команды</div>

      <PieChart width={400} height={400}>
        <Pie
          data={levelData}
          dataKey="value"
          outerRadius={140}
          label={renderLabel}
          labelLine={false}
        >
          {levelData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={levelColors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default LevelPanel;
