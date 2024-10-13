import { useEffect, useState } from "react";
import { employees } from "../utils/employees";
import { getFilterValue } from "../services/filter/reducer";
import { useAppSelector } from "./hooks";

function useChoose() {
  const filterValue = useAppSelector(getFilterValue);

  const [newEmployees, setNewEmployees] = useState(employees); // начальное значение

  useEffect(() => {
    let filteredEmployees = employees;

    // Проверка, есть ли пустые фильтры
    const hasEmptyFilter = filterValue.some((filter) => filter.arr.length === 0);

    // Если хотя бы один фильтр пустой, устанавливаем newEmployees как []
    if (hasEmptyFilter) {
      setNewEmployees([]);
      return; // Выходим из эффекта, чтобы не продолжать фильтрацию
    }

    // Фильтрация по Команде
    const teamFilter = filterValue.find((i) => i.type === "Команда");
    if (teamFilter && teamFilter.arr.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        teamFilter.arr.includes(employee.employee_team_name)
      );
    }

    // Фильтрация по Специальности
    const specialtyFilter = filterValue.find((i) => i.type === "Специальность");
    if (specialtyFilter && specialtyFilter.arr.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        specialtyFilter.arr.includes(employee.employee_position_name)
      );
    }

    // Фильтрация по Грейду
    const gradeFilter = filterValue.find((i) => i.type === "Грейд");
    if (gradeFilter && gradeFilter.arr.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        gradeFilter.arr.includes(employee.employee_grade_name)
      );
    }

    // Фильтрация по Навыкам
    const skillFilter = filterValue.find((i) => i.type === "Навык");
    if (skillFilter && skillFilter.arr.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        employee.skills.some((skill) =>
          skillFilter.arr.includes(skill.skill_name)
        )
      );
    }

    // Фильтрация по Компетенциям
    const competencyFilter = filterValue.find((i) => i.type === "Компетенция");
    if (competencyFilter && competencyFilter.arr.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        employee.skills.some((skill) =>
          competencyFilter.arr.includes(skill.skill_competence_name)
        )
      );
    }

    // Фильтрация по Домену
    const domainFilter = filterValue.find((i) => i.type === "Домен");
    if (domainFilter && domainFilter.arr.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        employee.skills.some((skill) =>
          domainFilter.arr.includes(skill.skill_domain_name)
        )
      );
    }

    // Фильтрация по Hard / Soft
    const hardSoftFilter = filterValue.find((i) => i.type === "Hard / Soft");
    if (hardSoftFilter && hardSoftFilter.arr.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        employee.skills.some((skill) =>
          hardSoftFilter.arr.includes(skill.skill_hard_soft_type)
        )
      );
    }

    // Фильтрация по Сотрудникам
    const employeeFilter = filterValue.find((i) => i.type === "Сотрудники");
    if (employeeFilter && employeeFilter.arr.length > 0) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        employeeFilter.arr.includes(employee.employee_name_surname)
      );
    }

    setNewEmployees(filteredEmployees); // Обновляем состояние с отфильтрованными сотрудниками
  }, [filterValue]); // Следим за изменениями в filterValue

  return {
    newEmployees,
  };
}

export default useChoose;





