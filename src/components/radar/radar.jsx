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

  const { newEmployees } = useChoose();

  const employeesAllHardSkills = [];
  let employeesHardSkills = [];

  newEmployees?.map((item) => {
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
        //   console.log(uniqueSubjects);
      }
      // console.log(employeesHardSkills);
    });
  });
  // console.log(employeesHardSkills);
  // console.log(uniqueSubjects);

  // const uniqueSubjects = {};

  // // Перебираем массив объектов
  // employeesAllHardSkills.forEach((obj) => {
  //   const { subject, estimation } = obj;

  //   // Если такого subject еще нет в объекте или текущая оценка больше
  //   if (
  //     !uniqueSubjects[subject] ||
  //     uniqueSubjects[subject].estimation < estimation
  //   ) {
  //     // Сохраняем объект с максимальной оценкой
  //     uniqueSubjects[subject] = { subject, estimation };
  //   }
  // });

  // console.log(employeesAllHardSkills);

  // function updateArray(array, newObj) {
  //   // Ищем объект с таким же значением для ключа key1
  //   const foundIndex = array.findIndex((item) => item.key1 === newObj.key1);

  //   if (foundIndex !== -1) {
  //     // Если объект найден, сравниваем значения key2
  //     if (array[foundIndex].key2 < newObj.key2) {
  //       // Обновляем объект, если новое значение key2 больше
  //       array[foundIndex] = newObj;
  //     }
  //   } else {
  //     // Если объект не найден, добавляем новый
  //     array.push(newObj);
  //   }

  //   return array;
  // }

  // const data = [
  //   {
  //     subject: "Math",
  //     A: 120,
  //     B: 110,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Chinese",
  //     A: 98,
  //     B: 130,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "English",
  //     A: 86,
  //     B: 130,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Geography",
  //     A: 99,
  //     B: 100,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Physics",
  //     A: 85,
  //     B: 90,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "History",
  //     A: 65,
  //     B: 85,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Math1",
  //     A: 120,
  //     B: 110,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Chinese1",
  //     A: 98,
  //     B: 130,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "English1",
  //     A: 86,
  //     B: 130,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Geography1",
  //     A: 99,
  //     B: 100,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Physics1",
  //     A: 85,
  //     B: 90,
  //     C: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "History1",
  //     A: 65,
  //     B: 85,
  //     C: 100,
  //     fullMark: 150,
  //   },
  // ];

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
      <PolarRadiusAxis angle={90} domain={[0, 4]} />
      <Radar
        dot={true}
        name="Mike"
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
