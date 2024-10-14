import styles from "./level-panel.module.css";

import { PieChart, Pie, Cell, Tooltip, PieLabelRenderProps } from "recharts";

type TypeGradeData = {
  name: string;
  value: number;
};

function LevelPanel(): React.JSX.Element {
  const gradeData: TypeGradeData[] = [
    { name: "Максимальный грейд ", value: 19 },
    { name: "Есть куда расти ", value: 81 },
  ];

  const colors = ["rgba(149, 163, 252, 1)", "rgba(169, 197, 218, 1)"];

  const renderLabel = (props: PieLabelRenderProps) => {
    const { name, value } = props;
    return `${name}: ${value}%`;
  };

  return (
    <div className={styles.level_panel}>
      <div className={styles.level_panel__title}>Уровень команды</div>

      <PieChart width={400} height={400}>
        <Pie
          data={gradeData}
          dataKey="value"
          outerRadius={140}
          label={renderLabel}
          labelLine={false}
        >
          {gradeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default LevelPanel;
