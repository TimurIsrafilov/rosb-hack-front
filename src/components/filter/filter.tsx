import { Link, NavLink, useLocation } from "react-router-dom";

import styles from "./filter.module.css";

import { v4 as uuidv4 } from "uuid";

import close_icon from "../../images/close_icon.svg";
import avatar from "../../images/avatar.svg";

import { Button } from "antd";
import { Divider } from "antd";
import { useState } from "react";
import FilterItem from "../filter-item/filter-item";
import FilterItem1 from "../filter-item1/filter-item1";
import FilterItem2 from "../filter-element/filter-element";
import FilterButton from "../filter-button/filter-button";
import FilterElement from "../filter-element/filter-element";

function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const filterData = [
    {
      name: "Команда",
      options: ["Core", "Медиа", "Приложение", "ФЛ", "Эквайринг", "ЮЛ"],
    },
    {
      name: "Специальность",
      options: [
        "Бизнес Аналитик",
        "Дизайнер",
        "Менеджер продукта",
        "Менеджер проекта",
        "Разработчик / Программист",
        "Системный аналитик",
        "Тестировщик",
        "Тимлид",
      ],
    },
    {
      name: "Грейд",
      options: ["Junior", "Middle", "Senior", "Intern", "Lead", "Head"],
    },
    {
      name: "Hard / Soft skills",
      options: ["Hard skills", "Soft skills"],
    },
    {
      name: "Компетенция",
      options: [
        "Знание иностранных языков",
        "Знание языков программирования",
        "Лидерские качества",
        "Межличностные навыки",
        "Работа в команде",
        "Тайм-менеджмент",
      ],
    },
    {
      name: "Навык",
      options: ["Asana", "C++", "Clickhouse", "CorelDraw", "Java", "MacOS"],
    },
    {
      name: "Сотрудник",
      options: [
        "Акимов Роберт",
        "Аксенова Аделина",
        "Александров Глеб",
        "Александров Ярослав",
        "Алексеева Вероника",
        "Андреев Василий",
      ],
    },
  ];

  const handleIsFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className={isFilterOpen ? styles.filter : ""}>
      {isFilterOpen && (
        // <div className={styles.filter}>
        <div className={styles.filter__main_container}>
          <div className={styles.filter__title_buttons_container}>
            <div className={styles.filter__title_container}>
              <button
                className={styles.filter__close_buttons}
                type="button"
                onClick={handleIsFilterOpen}
              >
                <svg className={styles.filter__close_icon}></svg>
              </button>
              <p className={styles.filter__title}>Фильтры</p>
            </div>

            <div className={styles.filter__buttons_container}>
              <Button
                className={styles.filter__button}
                type="primary"
                // onClick={handleButtonActive}
                disabled
              >
                Сбросить
              </Button>

              <Button
                className={styles.filter__button}
                type="primary"
                // onClick={handleButtonActive}
              >
                Готово
              </Button>
            </div>
          </div>
          <div className={styles.filter__points_container}>
            {/* @ts-ignore */}
            {filterData.map((item) => (
              <FilterElement
                // @ts-ignore
                label={item.name}
                menuOptions={item.options}
                key={uuidv4()}
              />
            ))}
          </div>
          {/* @ts-ignore */}
          {/* <FilterElement label={Команда} menuOptions={menuTeamOptions} /> */}
          {/* @ts-ignore */}
          {/* <FilterElement menuOptions={menuSpecialityOptions} /> */}

          {/* <p className={styles.filter__title}>Фильтры</p>
          <FilterItem />
          <p className={styles.filter__title}>Фильтры</p>
          <FilterItem1 />
          <p className={styles.filter__title}>Фильтры</p> */}

          {/* <FilterButton /> */}
          {/* @ts-ignore */}

          {/* @ts-ignore */}

          {/* <FilterItem2 /> */}
          {/* <p className={styles.filter__title}>Фильтры</p> */}
          {/* <FilterButton /> */}
        </div>
        // </div>
      )}
    </div>
  );
}

export default Filter;
