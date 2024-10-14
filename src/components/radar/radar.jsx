import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import useChoose from "../../hooks/choose";

const CustomRadar = (props) => {
  const { chosenEmployees } = useChoose();

  const employeesAllHardSkills = [];
  let employeesHardSkills = [];

  chosenEmployees?.map((item) => {
    item.skills.map((point) => {
      if (point.skill_hard_soft_type === props.type) {
        employeesAllHardSkills.push({
          subject: point.skill_name,
          estimation: point.skill_estimation,
        });
        const uniqueSubjects = {};
        employeesAllHardSkills.forEach((obj) => {
          const { subject, estimation } = obj;
          if (
            !uniqueSubjects[subject] ||
            uniqueSubjects[subject].estimation < estimation
          ) {
            uniqueSubjects[subject] = { subject, estimation };
          }
        });
        return (employeesHardSkills = Object.values(uniqueSubjects));
      }
    });
  });

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={employeesHardSkills}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={100} domain={[0, 4]} />

      <Radar
        dot={true}
        name={props.type}
        dataKey="estimation"
        stroke={props.type === "Hard" ? "#8884d8" : "#82ca9d"}
        fill={props.type === "Hard" ? "#8884d8" : "#82ca9d"}
        fillOpacity={0.2}
      />

      <Legend />
    </RadarChart>
  );
};

export default CustomRadar;
