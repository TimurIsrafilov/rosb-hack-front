import { getEmployees } from "../services/employees/reducer";
import { employees as employeesMock } from "../utils/employees";
import { useAppSelector } from "./hooks";

function useFilter() {
  const employeesFromBack = useAppSelector(getEmployees);

  const employees = employeesMock || employeesFromBack;

  const filterData = [];

  const teams = [];
  const positions = [];
  const grades = [];
  const skillNames = [];
  const skillCompetences = [];
  const skillDomains = [];
  const employeesTotal = [];

  employees?.forEach((item) => {
    // Фильтр по командам
    if (!teams.includes(item.employee_team_name)) {
      teams.push(item.employee_team_name);
    }

    // Фильтр по позициям
    if (!positions.includes(item.employee_position_name)) {
      positions.push(item.employee_position_name);
    }

    // Фильтр по грейдам
    if (!grades.includes(item.employee_grade_name)) {
      grades.push(item.employee_grade_name);
    }

    // Фильтр по навыкам
    item.skills.forEach((value) => {
      if (!skillNames.includes(value.skill_name)) {
        skillNames.push(value.skill_name);
      }

      if (!skillCompetences.includes(value.skill_competence_name)) {
        skillCompetences.push(value.skill_competence_name);
      }

      if (!skillDomains.includes(value.skill_domain_name)) {
        skillDomains.push(value.skill_domain_name);
      }
    });

    // Фильтр по сотрудникам
    if (!employeesTotal.includes(item.employee_name_surname)) {
      employeesTotal.push(item.employee_name_surname);
    }
  });

  // Добавляем данные в фильтры
  filterData.push({ type: "Команда", options: teams });
  filterData.push({ type: "Специальность", options: positions });
  filterData.push({ type: "Грейд", options: grades });
  filterData.push({ type: "Сотрудники", options: employeesTotal });
  filterData.push({ type: "Hard / Soft", options: ["Hard", "Soft"] });
  filterData.push({ type: "Домен", options: skillDomains });
  filterData.push({ type: "Компетенция", options: skillCompetences });
  filterData.push({ type: "Навык", options: skillNames });

  return {
    filterData,
  };
}

export default useFilter;
