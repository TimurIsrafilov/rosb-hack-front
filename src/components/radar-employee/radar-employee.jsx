import useChoose from "../../hooks/choose";
import styles from "./radar-employee.module.css";


import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";



const RadarEmployee = (props) => {
  // static demoUrl = 'https://codesandbox.io/p/sandbox/radar-chart-specified-domain-l68xry';

  const { chosenEmployees } = useChoose();



const skillMap = {};

chosenEmployees.forEach(employee => {
  employee.skills.forEach(skill => {

    if (skill.skill_hard_soft_type !== props.type) {


    const skillName = skill.skill_name;
    
    if (!skillMap[skillName] ) {
      skillMap[skillName] = { skill_name: skillName };
    }
  
    skillMap[skillName][employee.employee_id] = skill.skill_estimation;}
  });
});

// Преобразуем в массив
const result = Object.values(skillMap);

// const keys = Object.keys(result[0]);
// const firstValue = result[keys[0]]; // 'Alice'
// const secondValue = result[keys[1]]

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


        <Radar
          dot={true}
          name="1"
          dataKey="2"
          stroke="var(--red)"
          fill="var(--red)"
          fillOpacity={0.6}
        />
        <Radar
          dot={true}
          name="2"
          dataKey="3"
          stroke="blue"
          fill="blue"
          fillOpacity={0.6}
        />


      {/* <Radar
        name="Lily"
        dataKey="B"
        stroke="#82ca9d"
        fill="transparent"
        fillOpacity={0.6}
      />
      <Radar
        name="Lilyp"
        dataKey="C"
        stroke="#7214be"
        fill="transparent"
        fillOpacity={0.6}
      /> */}
      <Legend />
    </RadarChart>
  );
};

export default RadarEmployee;

// function Radar() {
//   return <div></div>;
// }

// export default Radar;
