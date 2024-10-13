import useChoose from "../../hooks/choose";
import styles from "./radar.module.css";

// import React, { PureComponent } from "react";
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   Legend,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   ResponsiveContainer,
// } from "recharts";

// import "./styles.css";
// import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/p/sandbox/radar-chart-specified-domain-l68xry';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
//           <PolarGrid />
//           <PolarAngleAxis dataKey="subject" />
//           <PolarRadiusAxis angle={30} domain={[0, 150]} />
//           <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//           <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
//           <Legend />
//         </RadarChart>
//       </ResponsiveContainer>
//     );
//   }
// }

const CustomRadar = (props) => {
  // static demoUrl = 'https://codesandbox.io/p/sandbox/radar-chart-specified-domain-l68xry';

  const { chosenEmployees } = useChoose();

  const employeesAllHardSkills = [];
  let employeesHardSkills = [];

  chosenEmployees?.map((item) => {
    item.skills.map((point) => {
      if (point.skill_hard_soft_type === props.type) {
        employeesAllHardSkills.push({
          subject: point.skill_name,
          estimation: point.skill_estimation,
          // fullMark: 4
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
        //   console.log(uniqueSubjects);
      }
      // console.log(employeesHardSkills);
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
        stroke="#8884d8"
        fill="transparent"
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

export default CustomRadar;

// function Radar() {
//   return <div></div>;
// }

// export default Radar;
