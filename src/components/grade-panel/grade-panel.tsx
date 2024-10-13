import { useEffect, useState } from "react";

import { Pie } from "@ant-design/plots";
import { PieConfig } from "@ant-design/plots/lib/components/pie"; // Тип для конфигурации Pie

import useCalculate from "../../hooks/calculate";

import { gradeColors } from "../../utils/mockData";

interface GradeData {
  type: string;
  value: number;
}

const GradePanel: React.FC = () => {
  const { employeesGrade } = useCalculate();

  const [data, setData] = useState<GradeData[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(employeesGrade);
    }, 1000);
  }, [employeesGrade]);

  const config: PieConfig = {
    data,
    scale: { color: { palette: gradeColors } },
    angleField: "value",
    colorField: "type",
    radius: 0.7,
    label: {
      text: (d: GradeData) => `${d.type}\n ${d.value}`,

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
  };
  //@ts-ignore - TS decides that type is too complex to compute
  return <Pie {...config} />;
};

export default GradePanel;
