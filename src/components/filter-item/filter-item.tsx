import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Checkbox, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Команда",
    icon: <SettingOutlined />,
    children: [
      // { key: "Все", label: "Все", icon: <Checkbox /> },
      { key: "2", label: "Core", icon: <Checkbox /> },
      { key: "3", label: "Медиа", icon: <Checkbox /> },
      { key: "4", label: "Приложение", icon: <Checkbox /> },
      { key: "5", label: "ФЛ", icon: <Checkbox /> },
      { key: "6", label: "Эквайринг", icon: <Checkbox /> },
      { key: "7", label: "ЮЛ", icon: <Checkbox /> },
    ],
  },

  {
    key: "sub2",
    label: "Специальность",
    icon: <SettingOutlined />,
    children: [
      // { key: "Все", label: "Все", icon: <Checkbox /> },
      { key: "9", label: "Бизнес Аналитик", icon: <Checkbox /> },
      { key: "10", label: "Дизайнер", icon: <Checkbox /> },
      { key: "11", label: "Менеджер продукта", icon: <Checkbox /> },
      { key: "12", label: "Менеджер проекта", icon: <Checkbox /> },
      { key: "13", label: "Разработчик / Программист", icon: <Checkbox /> },
      { key: "14", label: "Системный аналитик", icon: <Checkbox /> },
      { key: "15", label: "Тестировщик", icon: <Checkbox /> },
      { key: "16", label: "Тимлид", icon: <Checkbox /> },
    ],
  },
];

const FilterItem: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      // style={{ width: 256 }}
      // defaultSelectedKeys={['1']}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      multiple
      // selectable
      selectable={false}
    />
  );
};

export default FilterItem;
