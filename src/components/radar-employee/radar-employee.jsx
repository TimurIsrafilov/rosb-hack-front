import { v4 as uuidv4 } from "uuid";

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import useChoose from "../../hooks/choose";

const RadarEmployee = (props) => {
  const { chosenEmployees } = useChoose();
  const skillMap = {};
  const allEmployees = [];

  chosenEmployees.forEach((employee) => {
    employee.skills.forEach((skill) => {
      if (skill.skill_hard_soft_type === props.type) {
        const skillName = skill.skill_name;

        if (!skillMap[skillName]) {
          skillMap[skillName] = { skill_name: skillName };
        }

        skillMap[skillName][employee.employee_id] = skill.skill_estimation;
        const exists = allEmployees.some(
          (item) => item.id === employee.employee_id
        );

        function getRandomNumber() {
          return Math.floor(Math.random() * 255);
        }
        const randomNum1 = getRandomNumber();
        const randomNum2 = getRandomNumber();
        const randomNum3 = getRandomNumber();

        if (!exists) {
          allEmployees.push({
            id: employee.employee_id,
            color: `rgba(${randomNum1}, ${randomNum2}, ${randomNum3}, 1)`,
            name: employee.employee_name_surname,
          });
        }
      }
    });
  });

  const result = Object.values(skillMap);
  const employeesToShow = allEmployees.slice(0, 5);

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={result}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="skill_name" />
      <PolarRadiusAxis angle={100} domain={[0, 4]} />

      {employeesToShow.map((i) => (
        <Radar
          dot={true}
          name={i.name}
          dataKey={i.id}
          stroke={i.color}
          fill={i.color}
          fillOpacity={0.3}
          key={uuidv4()}
        />
      ))}

      <Legend />
    </RadarChart>
  );
};

export default RadarEmployee;
