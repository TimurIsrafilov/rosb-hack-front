import { useMemo } from "react";
import useChoose from "./choose";

function useCalculate() {
  const { chosenEmployees } = useChoose();

  const {
    employeeNumber,
    employeeBusFactor,
    employeeKey,
    skillEducationRequest,
    skillEducationInProgress,
    employeesGrade,
  } = useMemo(() => {
    const employeeNumber = [];
    const employeeBusFactor = [];
    const employeeKey = [];
    const skillEducationRequest = [];
    const skillEducationInProgress = [];
    const employeesGradeMap = {};

    chosenEmployees?.forEach((item) => {
      // Собираем все employeeNumber
      employeeNumber.push(item.employee_id);

      // Фильтрация по employeeBusFactor
      if (item.employee_bus_factor) {
        employeeBusFactor.push(item.employee_id);
      }

      // Фильтрация по employeeKey
      if (item.employee_key) {
        employeeKey.push(item.employee_id);
      }

      // Сборка данных о скиллах
      item.skills?.forEach((skill) => {
        if (skill.skill_education_request) {
          skillEducationRequest.push(skill.skill_name);
        }

        if (skill.skill_education_in_progress) {
          skillEducationInProgress.push(item.employee_id);
        }
      });

      // Подсчет по employeeGrade
      const grade = item.employee_grade_name;
      if (grade) {
        employeesGradeMap[grade] = (employeesGradeMap[grade] || 0) + 1;
      }
    });

    // Преобразуем объект employeesGradeMap в массив
    const employeesGrade = Object.keys(employeesGradeMap).map((key) => ({
      type: key,
      value: employeesGradeMap[key],
    }));

    return {
      employeeNumber,
      employeeBusFactor,
      employeeKey,
      skillEducationRequest,
      skillEducationInProgress,
      employeesGrade,
    };
  }, [chosenEmployees]);

  return {
    employeeNumber,
    employeeBusFactor,
    employeeKey,
    skillEducationRequest,
    skillEducationInProgress,
    employeesGrade,
  };
}

export default useCalculate;
