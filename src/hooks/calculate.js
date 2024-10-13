import { useMemo } from "react";
import { employees } from "../utils/employees";

function useCalculate(props) {
  const employeeNumber = [];
  const employeeBusFactor = [];
  const employeeKey = [];
  const skillEducationRequest = [];
  const skillEducationInProgress = [];
  const employeesAllGrades = useMemo(() => {
    return [];
  }, []);

  employees?.map((item) => {
    employeeNumber.push(item.employee_id);

    return employeeNumber;
  });

  employees?.map((item) => {
    if (item.employee_bus_factor) {
      employeeBusFactor.push(item.employee_id);
    }

    return employeeBusFactor;
  });

  employees?.map((item) => {
    if (item.employee_key) {
      employeeKey.push(item.employee_id);
    }

    return employeeKey;
  });

  employees?.map((item) => {
    item.skills?.map((skill) => {
      if (skill.skill_education_request) {
        skillEducationRequest.push(skill.skill_name);
      }
    });

    return skillEducationRequest;
  });

  employees?.map((item) => {
    item.skills?.map((skill) => {
      if (skill.skill_education_in_progress) {
        skillEducationInProgress.push(item.employee_id);
        return skillEducationInProgress;
      }
    });

    return skillEducationInProgress;
  });

  employees?.map((item) => {
    employeesAllGrades.push(item.employee_grade_name);

    return employeesAllGrades;
  });

  function countOccurrences(arr) {
    const occurrences = arr.reduce((acc, str) => {
      acc[str] = (acc[str] || 0) + 1;
      // console.log(acc);
      return acc;
    }, {});

    return Object.keys(occurrences).map((key, value) => {
      return {
        type: key,
        value: occurrences[key],
      };
    });
  }

  const employeesGrade = useMemo(() => {
    return countOccurrences(employeesAllGrades);
  }, [employeesAllGrades]);

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
