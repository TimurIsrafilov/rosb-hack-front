import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

const GradePanel1 = () => {
  // const data = [
  //   { type: "Head", value: 3 },
  //   { type: "Lead", value: 5 },
  //   { type: "Intern", value: 10 },
  //   { type: "Senior", value: 19 },
  //   { type: "Middle", value: 37 },
  //   { type: "Junior", value: 44 },
  // ];

  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData([
        { type: "Head", value: 3 },
        { type: "Lead", value: 5 },
        { type: "Intern", value: 10 },
        { type: "Senior", value: 19 },
        { type: "Middle", value: 37 },
        { type: "Junior", value: 44 },
      ]);
    }, 1500);
  }, []);

  const colors = [
    "rgba(169, 197, 218, 1)",
    "rgba(161, 227, 203, 1)",
    "rgba(177, 227, 255, 1)",
    "rgba(186, 236, 189, 1)",
    "rgba(149, 163, 252, 1)",
    "rgba(66, 67, 75, 1)",
  ];

  // ({ data, onReady }) => {
  const config = {
    data,
    scale: { color: { palette: colors } },
    angleField: "value",
    colorField: "type",
    radius: 0.7,
    label: {
      text: (d) => `${d.type}\n ${d.value}`,
      // position: 'spider',
      position: "surround",

      rowPadding: 5,
    },

    axis: {
      x: {line: true, },
      y: {line: true},
    },

    legend: {
      color: {
        title: false,
        position: "bottom",
        rowPadding: 5,
      },
    },
    // onReady,
  };

  // };

  return <Pie {...config} />;
};

export default GradePanel1;
