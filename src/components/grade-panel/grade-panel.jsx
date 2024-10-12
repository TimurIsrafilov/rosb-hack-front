import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import useCalculate from "../../hooks/calculate";

const GradePanel = () => {
  const { employeesGrade } = useCalculate();

  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(employeesGrade);
    }, 1000);
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
      x: { line: true },
      y: { line: true },
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

export default GradePanel;
