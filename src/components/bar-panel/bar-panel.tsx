import { Bar } from "@ant-design/plots";
import { BarConfig } from "@ant-design/plots/lib/components/bar"; // Импорт типа
import { barColors, barData } from "../../utils/mockData";

const BarPanel: React.FC = () => {
  const config: BarConfig = {
    data: barData,
    scale: { color: { palette: barColors } },
    label: {
      text: "value",
      formatter: "",
      style: {
        fill: "black",
        dx: -7,
        fontSize: 12,
      },
    },
    xField: "position",
    yField: "value",
    colorField: "grade",
    stack: true,
    style: {
      height: 25,
    },
    legend: {
      position: "bottom",
      itemSpacing: 5,
    },
  };
  //@ts-ignore - TS decides that type is too complex to compute
  return <Bar {...config} />;
};

export default BarPanel;
