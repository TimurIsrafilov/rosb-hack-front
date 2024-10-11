import { Bar } from "@ant-design/plots";

const BarPanel = () => {
  const barData = [
    {
      position: "Тимлид",
      grade: "Intern",
      value: 1,
    },
    {
      position: "Тестировщик",
      grade: "Intern",
      value: 2,
    },
    {
      position: "Системный аналитик",
      grade: "Intern",
      value: 1,
    },

    {
      position: "Разработчик / Программист",
      grade: "Intern",
      value: 1,
    },

    {
      position: "Менеджер проекта",
      grade: "Intern",
      value: 1,
    },

    {
      position: "Менеджер продукта",
      grade: "Intern",
      value: 1,
    },

    {
      position: "Дизайнер",
      grade: "Intern",
      value: 2,
    },

    {
      position: "Бизнес Аналитик",
      grade: "Intern",
      value: 1,
    },

    {
      position: "Тимлид",
      grade: "Junior",
      value: 5,
    },
    {
      position: "Тестировщик",
      grade: "Junior",
      value: 6,
    },
    {
      position: "Системный аналитик",
      grade: "Junior",
      value: 5,
    },

    {
      position: "Разработчик / Программист",
      grade: "Junior",
      value: 6,
    },

    {
      position: "Менеджер проекта",
      grade: "Junior",
      value: 5,
    },

    {
      position: "Менеджер продукта",
      grade: "Junior",
      value: 5,
    },

    {
      position: "Дизайнер",
      grade: "Junior",
      value: 6,
    },

    {
      position: "Бизнес Аналитик",
      grade: "Junior",
      value: 6,
    },

    {
      position: "Тимлид",
      grade: "Middle",
      value: 4,
    },
    {
      position: "Тестировщик",
      grade: "Middle",
      value: 5,
    },
    {
      position: "Системный аналитик",
      grade: "Middle",
      value: 4,
    },

    {
      position: "Разработчик / Программист",
      grade: "Middle",
      value: 5,
    },

    {
      position: "Менеджер проекта",
      grade: "Middle",
      value: 4,
    },

    {
      position: "Менеджер продукта",
      grade: "Middle",
      value: 5,
    },

    {
      position: "Дизайнер",
      grade: "Middle",
      value: 5,
    },

    {
      position: "Бизнес Аналитик",
      grade: "Middle",
      value: 5,
    },

    {
      position: "Тимлид",
      grade: "Senior",
      value: 4,
    },
    {
      position: "Тестировщик",
      grade: "Senior",
      value: 5,
    },
    {
      position: "Системный аналитик",
      grade: "Senior",
      value: 4,
    },

    {
      position: "Разработчик / Программист",
      grade: "Senior",
      value: 5,
    },

    {
      position: "Менеджер проекта",
      grade: "Senior",
      value: 4,
    },

    {
      position: "Менеджер продукта",
      grade: "Senior",
      value: 5,
    },

    {
      position: "Дизайнер",
      grade: "Senior",
      value: 5,
    },

    {
      position: "Бизнес Аналитик",
      grade: "Senior",
      value: 5,
    },

    {
      position: "Тимлид",
      grade: "Lead",
      value: 2,
    },
    {
      position: "Тестировщик",
      grade: "Lead",
      value: 3,
    },
    {
      position: "Системный аналитик",
      grade: "Lead",
      value: 3,
    },

    {
      position: "Разработчик / Программист",
      grade: "Lead",
      value: 2,
    },

    {
      position: "Менеджер проекта",
      grade: "Lead",
      value: 2,
    },

    {
      position: "Менеджер продукта",
      grade: "Lead",
      value: 3,
    },

    {
      position: "Дизайнер",
      grade: "Lead",
      value: 2,
    },

    {
      position: "Бизнес Аналитик",
      grade: "Lead",
      value: 5,
    },

    {
      position: "Тимлид",
      grade: "Head",
      value: 1,
    },
    {
      position: "Тестировщик",
      grade: "Head",
      value: 1,
    },
    {
      position: "Системный аналитик",
      grade: "Head",
      value: 1,
    },

    {
      position: "Разработчик / Программист",
      grade: "Head",
      value: 1,
    },

    {
      position: "Менеджер проекта",
      grade: "Head",
      value: 1,
    },

    {
      position: "Менеджер продукта",
      grade: "Head",
      value: 1,
    },

    {
      position: "Дизайнер",
      grade: "Head",
      value: 1,
    },

    {
      position: "Бизнес Аналитик",
      grade: "Head",
      value: 1,
    },
  ];

  const colors = [
    "rgba(177, 227, 255, 1)",
    "rgba(186, 237, 189, 1)",
    "rgba(198, 199, 249, 1)",
    "rgba(149, 164, 252, 1)",
    "rgba(169, 197, 219, 1)",
    "rgba(161, 227, 203, 1)",
  ];

  const config = {
    data: barData,
    scale: { color: { palette: colors } },
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
      color: {
        title: false,
        position: "bottom",
        rowPadding: 5,
      },
    },


  };

  return <Bar {...config} />;
};

export default BarPanel;
