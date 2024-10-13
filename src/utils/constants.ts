// const user = {
//   id: 3,
//   name_surname: "Зотов Давид",
//   position: "Разработчик / Программист",
//   team: "teamId", // "string" id клманды в которой он состоит ФЛ
//   grade: "Junior",
//   hard_skills: {
//     foreign_languages: [
//       { item: "Английский язык", value: 3 },
//       { item: "Китайский язык", value: 3 },
//     ],
//     programming_languages: [
//       { item: "C++", value: 4 },
//       { item: "Java", value: 3 },
//       { item: "Python++", value: 5 },
//     ],

//     graphic_programs: [
//       { item: "CorelDraw", value: 4 },
//       { item: "PhotoShop", value: 2 },
//     ],

//     operation_systems: [
//       { item: "Linux", value: 1 },
//       { item: "MacOS", value: 3 },
//       { item: "Windows", value: 4 },
//     ],
//     project_management_systems: [
//       { item: "Trello", value: 4 },
//       { item: "Jira", value: 3 },
//     ],
//     data_base: [
//       { item: "MySQL", value: 4 },
//       { item: "MS SQL Server", value: 3 },
//       { item: "Clickhouse", value: 4 },
//     ],
//     data_science: [
//       { item: "ML", value: 4 },
//       { item: "Pandas", value: 2 },
//       { item: "Seaborn", value: 4 },
//     ],
//   },
//   soft_skills: {
//     leadership: [
//       { item: "Креативное мышление", value: 4 },
//       { item: "Принятие решения", value: 3 },
//       { item: "Решение проблем", value: 5 },
//       { item: "Управление проектом", value: 4 },
//       { item: "Эмоциональный интеллект", value: 2 },
//     ],
//     interpersonal: [{ item: "Межличностные навыки", value: 4 }],
//     business_communication: [{ item: "Ораторское искусство", value: 3 }],
//     teamwork: [
//       { item: "Делегирование", value: 4 },
//       { item: "Менторство", value: 2 },
//       { item: "Обратная связь", value: 4 },
//     ],
//     time_management: [
//       { item: "Ораторское искусство", value: 4 },
//       { item: "Соблюдение сроков", value: 3 },
//     ],
//   },
// };

// const initialData = {
//   companyGeneralInfo: [
//     { number: 100, title: "Всего в команде" },
//     { number: 53, title: "Бас-фактор" },
//     { number: 77, title: "Key-people" },
//     { number: 53, title: "Запросы на обучение" },
//     { number: 11, title: "Учатся" },
//   ],
//   companyGrades: [
//     { name: "Head", value: 3 },
//     { name: "Lead", value: 5 },
//     { name: "Intern", value: 10 },
//     { name: "Senior", value: 19 },
//     { name: "Middle", value: 37 },
//     { name: "Junior", value: 44 },
//   ],
//   companySpeciality: {
//     head: [
//       { name: "Тимлид", value: 3 },
//       { name: "Бизнес аналитик", value: 5 },
//       { name: "Дизайнер", value: 10 },
//       { name: "Менеджер продукта", value: 19 },
//       { name: "Менеджер проекта", value: 37 },
//       { name: "Разработчик / Программист", value: 44 },
//       { name: "Системный аналитик", value: 44 },
//       { name: "Тестировщик", value: 44 },
//     ],
//     lead: [
//       { name: "Тимлид", value: 3 },
//       { name: "Бизнес аналитик", value: 5 },
//       { name: "Дизайнер", value: 10 },
//       { name: "Менеджер продукта", value: 19 },
//       { name: "Менеджер проекта", value: 37 },
//       { name: "Разработчик / Программист", value: 44 },
//       { name: "Системный аналитик", value: 44 },
//       { name: "Тестировщик", value: 44 },
//     ],
//     senior: [
//       { name: "Тимлид", value: 3 },
//       { name: "Бизнес аналитик", value: 5 },
//       { name: "Дизайнер", value: 10 },
//       { name: "Менеджер продукта", value: 19 },
//       { name: "Менеджер проекта", value: 37 },
//       { name: "Разработчик / Программист", value: 44 },
//       { name: "Системный аналитик", value: 44 },
//       { name: "Тестировщик", value: 44 },
//     ],
//     middle: [
//       { name: "Тимлид", value: 3 },
//       { name: "Бизнес аналитик", value: 5 },
//       { name: "Дизайнер", value: 10 },
//       { name: "Менеджер продукта", value: 19 },
//       { name: "Менеджер проекта", value: 37 },
//       { name: "Разработчик / Программист", value: 44 },
//       { name: "Системный аналитик", value: 44 },
//       { name: "Тестировщик", value: 44 },
//     ],
//     junior: [
//       { name: "Тимлид", value: 3 },
//       { name: "Бизнес аналитик", value: 5 },
//       { name: "Дизайнер", value: 10 },
//       { name: "Менеджер продукта", value: 19 },
//       { name: "Менеджер проекта", value: 37 },
//       { name: "Разработчик / Программист", value: 44 },
//       { name: "Системный аналитик", value: 44 },
//       { name: "Тестировщик", value: 44 },
//     ],
//     intern: [
//       { name: "Тимлид", value: 3 },
//       { name: "Бизнес аналитик", value: 5 },
//       { name: "Дизайнер", value: 10 },
//       { name: "Менеджер продукта", value: 19 },
//       { name: "Менеджер проекта", value: 37 },
//       { name: "Разработчик / Программист", value: 44 },
//       { name: "Системный аналитик", value: 44 },
//       { name: "Тестировщик", value: 44 },
//     ],
//   },
// };

// const companySpeciality = {
//   head: [
//     { name: "Тимлид", value: 3 },
//     { name: "Бизнес аналитик", value: 5 },
//     { name: "Дизайнер", value: 10 },
//     { name: "Менеджер продукта", value: 19 },
//     { name: "Менеджер проекта", value: 37 },
//     { name: "Разработчик / Программист", value: 44 },
//     { name: "Системный аналитик", value: 44 },
//     { name: "Тестировщик", value: 44 },
//   ],
//   lead: [
//     { name: "Тимлид", value: 3 },
//     { name: "Бизнес аналитик", value: 5 },
//     { name: "Дизайнер", value: 10 },
//     { name: "Менеджер продукта", value: 19 },
//     { name: "Менеджер проекта", value: 37 },
//     { name: "Разработчик / Программист", value: 44 },
//     { name: "Системный аналитик", value: 44 },
//     { name: "Тестировщик", value: 44 },
//   ],
// //   senior: [data],
// //   middle: [data],
// //   junior: [data],
// //   intern: [data],
// };

export const teamsData = {
  max_grade: 19,
  grow: 53,
};

// const data = {
//   infoCompany: [{ number: 100, title: "Всего в команде" }
//     // ...
//   ],
//   gradeData: [{ name: "Head", value: 3 }
//     // ...
//   ],
//   teamsData: { max_grade: 19, grow: 53 },
//   companySpeciality: {
//     head: [
//       { name: "Тимлид", value: 3 },
//       { name: "Бизнес аналитик", value: 5 },
//       { name: "Дизайнер", value: 10 },
//       { name: "Менеджер продукта", value: 19 },
//       { name: "Менеджер проекта", value: 37 },
//       { name: "Разработчик / Программист", value: 44 },
//       { name: "Системный аналитик", value: 44 },
//       { name: "Тестировщик", value: 44 },
//     ],
//     // ...
//   },
// //   ...
// };

// // const user = {
// //     id: 3,
// //     name_surname: "Зотов Давид",
// //     position: "Разработчик / Программист",
// //     team: "teamId", // "string" id клманды в которой он состоит ФЛ
// //     grade: "Junior",
// //     hard_skills: {data},
// //     soft_skills: {data},
// //     bf: boolean,
// //     key: boolean,
// //     education_request: boolean,
// //     education_in_progress: boolean,
// //   };

export const HOME = "/";
export const COMPANY = "/company";
export const TEAM = "/team";
export const WORKERS = "/workers";

export const  EMPLOEES = "/emploees";
export const  BASE_URL = "https://rosbank-hackathon.bounceme.net/api";

// const user = {
//   id: 3,
//   name_surname: "Зотов Давид",
//   position: "Разработчик / Программист",
//   team: "teamId", // "string" id клманды в которой он состоит ФЛ
//   grade: "Junior",
//   hard_skills: {
//     foreign_languages: [
//       {
//         item: "Английский язык",
//         value: 3,
//         correspondence: false,
//         bf: true,
//         key: true,
//         education: false,
//         education_in_progress: false,
//       },
//       {
//         item: "Китайский язык",
//         value: 3,
//         correspondence: false,
//         bf: true,
//         key: true,
//         education: false,
//         education_in_progress: false,
//       },
//     ],
//     programming_languages: [
//       { item: "C++", value: 4 },
//       { item: "Java", value: 3 },
//       { item: "Python++", value: 5 },
//     ],
//     graphic_programs: [
//       { item: "CorelDraw", value: 4 },
//       { item: "PhotoShop", value: 2 },
//     ],
//     operation_systems: [
//       { item: "Linux", value: 1 },
//       { item: "MacOS", value: 3 },
//       { item: "Windows", value: 4 },
//     ],
//     project_management_systems: [
//       { item: "Trello", value: 4 },
//       { item: "Jira", value: 3 },
//     ],
//     data_base: [
//       { item: "MySQL", value: 4 },
//       { item: "MS SQL Server", value: 3 },
//       { item: "Clickhouse", value: 4 },
//     ],
//     data_science: [
//       { item: "ML", value: 4 },
//       { item: "Pandas", value: 2 },
//       { item: "Seaborn", value: 4 },
//     ],
//   },
//   soft_skills: {
//     leadership: [
//       { item: "Креативное мышление", value: 4 },
//       { item: "Принятие решения", value: 3 },
//       { item: "Решение проблем", value: 5 },
//       { item: "Управление проектом", value: 4 },
//       { item: "Эмоциональный интеллект", value: 2 },
//     ],
//     interpersonal: [{ item: "Межличностные навыки", value: 4 }],
//     business_communication: [{ item: "Ораторское искусство", value: 3 }],
//     teamwork: [
//       { item: "Делегирование", value: 4 },
//       { item: "Менторство", value: 2 },
//       { item: "Обратная связь", value: 4 },
//     ],
//     time_management: [
//       { item: "Ораторское искусство", value: 4 },
//       { item: "Соблюдение сроков", value: 3 },
//     ],
//   },
// };

// const employee = {
//   employee_id: 3,
//   employee_name_surname: "Зотов Давид",
//   employee_position_name: "Разработчик / Программист",
//   employee_team_name: "ФЛ",
//   employee_grade_name: "Junior",
//   employee_bus_factor: 'boolean',
//   employee_key: 'boolean',
//   skills: [
//     {
//       skill_name: "Английский язык",
//       skill_competence_name: "Знание иностранных языков",
//       skill_domain_name: "Языковые навыки и коммуникация",
//       skill_hard_soft_type: "Soft",
//       skill_estimation: 0, // number (options 0,1,2,3,4)
//       skill_accordance: 'boolean',
//       skill_key: 'boolean',
//       skill_education_request: 'boolean',
//       skill_education_in_progress: 'boolean',
//     },
//     // ... по каждому скилу такой объект
//   ],
// };
