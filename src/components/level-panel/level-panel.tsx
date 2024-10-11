import InfoCard from "../info-card/info-card";
import styles from "./level-panel.module.css";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function LevelPanel() {
  const gradeData = [
    { name: "Максимальный грейд ", value: 19 },
    { name: "Есть куда расти ", value: 81 },
  ];

  const colors = ["rgba(149, 163, 252, 1)", "rgba(169, 197, 218, 1)"];

  return (
    <div className={styles.level_panel}>
      <div className={styles.level_panel__title}>Уровень команды</div>

      <PieChart width={400} height={400}>
        {/* <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      /> */}
        <Pie
          data={gradeData}
 
          // cx={258}
          // cy={258}
          // innerRadius={65}
          outerRadius={140}
          // fill="#82ca9d"
          // @ts-ignore
          label={`${gradeData.name} + ${gradeData.value}`}
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
