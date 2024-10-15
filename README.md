# Проект организационной структуры компании

## Описание проекта:

Web-приложение, дашборд для графического отображения корпоративной информации о сотрудниках, их должностях, командах, и навыках. Основная цель проекта — обеспечить удобный и эффективный способ отслеживания и управления ресурсами компании.

## Проект размещен на ресурсе GitHub Pages по ссылке:

[https://timurisrafilov.github.io/rosb-hack-front/](https://timurisrafilov.github.io/rosb-hack-front/)

## Видео туториал как пользоваться приложением и об основных функциях:

[https://disk.yandex.ru/i/kryYc-5GfYrCOg](https://disk.yandex.ru/i/kryYc-5GfYrCOg)

## Команды для сборки проекта:

склонировать реппозиторий
```bash
git clone https://github.com/TimurIsrafilov/rosb-hack-front.git
```

зайти в папку проекта
```bash
cd rosb-hack-front
```

установить зависимости
```bash
npm i
```

## Команды для запуска проекта:

запустить дев-режим
```bash
npm start
```

Открыть [http://localhost:3000](http://localhost:3000)

запустить прод-режим
```bash
npm run build
```

## Использован стек технологий:

- <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="reactjs" alt="reactjs" width="20" height="20"/> - **ReactJS** - библиотека JavaScript [https://react.dev/](https://react.dev/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="redux" alt="redux" width="20" height="20"/> - **Redux** - стейт-менеджер для ReactJS [https://redux.js.org/](https://redux.js.org/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="typescript" alt="typescript" width="20" height="20"/> - **TypeScript** - система статической типизации для JS [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

## Ссылки на библиотеки, иконки и шрифты:

- **Ant Design** - система пользовательского интерфейса,  [https://ant.design/](https://ant.design/) - использованы чекбоксы, выпадающее меню, кнопки, прелоадер

- **Recharts** - система графического построения [https://recharts.org/en-US/](https://recharts.org/en-US/) - использована для построения график-радаров страниц "навыки команды" и "навыки сотрудника"

- **Ant Design Charts** - система графического построения [https://ant-design-charts.antgroup.com/en](https://ant-design-charts.antgroup.com/en) - использована для построения диаграм "главной страницы"

## Реализованный функционал:
- Проект привязан к получаемой с бэкенда информации о сотрудниках и их навыках
- Графическое отображение структуры сотрудников в компании
- Реализован функционал фильтров для возможности отображать необходимую информацию по заданным параметрам
- Информация о различных параметрах в компании и в командах отображаются в графическом виде

## Что можно улучшить:
- Реализовать возможность визуализации информации за прошедшие и будущие периоды 
- Обеспечить возможность создавать новые команды и перемещать туда сотрудников
- Добавить возможность перемещать сотрудников между командами
- Добавить функционал авторизации

## Команда разработчиков:

Тимур Исрафилов
[![Telegram Badge](https://img.shields.io/badge/-timurisrafilov-blue?style=flat&logo=Telegram&logoColor=white)](https://t.me/timooooon11)