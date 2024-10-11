import InfoCard from "../info-card/info-card";
import styles from "./grade-panel.module.css";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function GradePanel() {
  const gradeData = [
    { name: "Head", value: 3 },
    { name: "Lead", value: 5 },
    { name: "Intern", value: 10 },
    { name: "Senior", value: 19 },
    { name: "Middle", value: 37 },
    { name: "Junior", value: 44 },
  ];

  const colors = [
    "rgba(66, 67, 75, 1)",
    "rgba(149, 163, 252, 1)",
    "rgba(186, 236, 189, 1)",
    "rgba(177, 227, 255, 1)",
    "rgba(161, 227, 203, 1)",
    "rgba(169, 197, 218, 1)",
  ];

  return (
    <div className={styles.grade_panel}>
      <div className={styles.grade_panel__title}>Грейд/чел</div>

      <PieChart >
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

          marginTop
          // cx={258}
          // cy={258}
          // innerRadius={65}
          outerRadius={140}
          fill="#82ca9d"
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

export default GradePanel;
