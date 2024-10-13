import { useEffect, useState } from "react";
import { employees } from "../utils/employees";
import { getFilterValue } from "../services/filter/reducer";
import { useAppSelector } from "./hooks";

function useChoose() {
  const filterValue = useAppSelector(getFilterValue);

  const [chosenEmployees, setChosenEmployees] = useState(employees); // начальное значение

  useEffect(() => {
    let filteredEmployees = employees;

    // Проверка, есть ли пустые фильтры
    const hasEmptyFilter = filterValue.some(
      (filter) => filter.options.length === 0
    );

    // Если хотя бы один фильтр пустой, устанавливаем chosenEmployees как []
    if (hasEmptyFilter) {
      setChosenEmployees([]);
      return; // Выходим из эффекта, чтобы не продолжать фильтрацию
    }

    // Фильтрация по Команде
    const teamFilter = filterValue.find((i) => i.type === "Команда");
    if (teamFilter && teamFilter.options.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        teamFilter.options.includes(employee.employee_team_name)
      );
    }

    // Фильтрация по Специальности
    const specialtyFilter = filterValue.find((i) => i.type === "Специальность");
    if (specialtyFilter && specialtyFilter.options.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        specialtyFilter.options.includes(employee.employee_position_name)
      );
    }
    // Фильтрация по Грейду
    const gradeFilter = filterValue.find((i) => i.type === "Грейд");
    if (gradeFilter && gradeFilter.options.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        gradeFilter.options.includes(employee.employee_grade_name)
      );
    }

    // Фильтрация по Навыкам
    const skillFilter = filterValue.find((i) => i.type === "Навык");
    if (skillFilter && skillFilter.options.length > 0) {
      filteredEmployees = filteredEmployees
        .map((employee) => {
          const filteredSkills = employee.skills.filter((skill) =>
            skillFilter.options.includes(skill.skill_name)
          );

          if (filteredSkills.length > 0) {
            return { ...employee, skills: filteredSkills };
          }
        })
        .filter((employee) => employee);
    }

    // Фильтрация по Компетенциям
    const competencyFilter = filterValue.find((i) => i.type === "Компетенция");
    if (competencyFilter && competencyFilter.options.length > 0) {
      filteredEmployees = filteredEmployees
        .map((employee) => {
          const filteredSkills = employee.skills.filter((skill) =>
            competencyFilter.options.includes(skill.skill_competence_name)
          );

          if (filteredSkills.length > 0) {
            return { ...employee, skills: filteredSkills };
          }
        })
        .filter((employee) => employee);
    }

    // Фильтрация по Домену
    const domainFilter = filterValue.find((i) => i.type === "Домен");
    if (domainFilter && domainFilter.options.length > 0) {
      filteredEmployees = filteredEmployees
        .map((employee) => {
          const filteredSkills = employee.skills.filter((skill) =>
            domainFilter.options.includes(skill.skill_domain_name)
          );

          if (filteredSkills.length > 0) {
            return { ...employee, skills: filteredSkills };
          }
        })
        .filter((employee) => employee);
    }

    // Фильтрация по Hard / Soft
    const hardSoftFilter = filterValue.find((i) => i.type === "Hard / Soft");
    if (hardSoftFilter && hardSoftFilter.options.length > 0) {
      filteredEmployees = filteredEmployees
        .map((employee) => {
          const filteredSkills = employee.skills.filter((skill) =>
            hardSoftFilter.options.includes(skill.skill_hard_soft_type)
          );

          if (filteredSkills.length > 0) {
            return { ...employee, skills: filteredSkills };
          }
        })
        .filter((employee) => employee);
    }

    // Фильтрация по Сотрудникам
    const employeeFilter = filterValue.find((i) => i.type === "Сотрудники");
    if (employeeFilter && employeeFilter.options.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        employeeFilter.options.includes(employee.employee_name_surname)
      );
    }

    setChosenEmployees(filteredEmployees); // Обновляем состояние с отфильтрованными сотрудниками
  }, [filterValue]); // Следим за изменениями в filterValue

  return {
    chosenEmployees,
  };
}

export default useChoose;