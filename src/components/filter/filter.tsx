import { Link, NavLink, useLocation } from "react-router-dom";

import styles from "./filter.module.css";

import { v4 as uuidv4 } from "uuid";

import close_icon from "../../images/close_icon.svg";
import avatar from "../../images/avatar.svg";

import { Button } from "antd";
import { Divider } from "antd";
import { useState } from "react";
import FilterItem from "../filter-item/filter-item";
// import FilterItem1 from "../filter-item1/filter-item1";
import FilterItem2 from "../filter-element/filter-element";
import FilterButton from "../filter-button/filter-button";
import FilterElement from "../filter-element/filter-element";
import useFilter from "../../hooks/filter";

function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const { filterData } = useFilter();

  // const filterData = [
  //   {
  //     name: "Команда",
  //     options: ["Core", "Медиа", "Приложение", "ФЛ", "Эквайринг", "ЮЛ"],
  //   },
  //   {
  //     name: "Специальность",
  //     options: [
  //       "Бизнес Аналитик",
  //       "Дизайнер",
  //       "Менеджер продукта",
  //       "Менеджер проекта",
  //       "Разработчик / Программист",
  //       "Системный аналитик",
  //       "Тестировщик",
  //       "Тимлид",
  //     ],
  //   },
  //   {
  //     name: "Грейд",
  //     options: ["Junior", "Middle", "Senior", "Intern", "Lead", "Head"],
  //   },
  //   {
  //     name: "Hard / Soft skills",
  //     options: ["Hard skills", "Soft skills"],
  //   },
  //   {
  //     name: "Компетенция",
  //     options: [
  //       "Знание иностранных языков",
  //       "Знание языков программирования",
  //       "Лидерские качества",
  //       "Межличностные навыки",
  //       "Работа в команде",
  //       "Тайм-менеджмент",
  //     ],
  //   },
  //   {
  //     name: "Навык",
  //     options: ["Asana", "C++", "Clickhouse", "CorelDraw", "Java", "MacOS"],
  //   },
  //   {
  //     name: "Сотрудник",
  //     options: [
  //       "Акимов Роберт",
  //       "Аксенова Аделина",
  //       "Александров Глеб",
  //       "Александров Ярослав",
  //       "Алексеева Вероника",
  //       "Андреев Василий",
  //     ],
  //   },
  // ];

  return (
    <div className={styles.filter}>
      {/* <div className={styles.filter__points_container}> */}
      {/* @ts-ignore */}
      {filterData.map((item) => (
        <FilterElement
          // @ts-ignore
          label={item.name}
          menuOptions={item.options}
          key={uuidv4()}
        />
      ))}
      {/* </div> */}
    </div>
  );
}

export default Filter;
