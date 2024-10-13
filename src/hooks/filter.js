import { useMemo } from "react";
import { employees } from "../utils/employees";
import { getFilterValue } from "../services/filter/reducer";
import { useAppSelector } from "./hooks";
import useChoose from "./choose";

function useFilter(props) {
  // const filterValue = useAppSelector(getFilterValue);

  const filterData = [];

  const teams = [];
  const filterTeamData = [];

  const positions = [];
  const filterPositionData = [];

  const grades = [];
  const filterGradeData = [];

  const skillNames = [];
  const filterSkillNameData = [];




  const skillCompetences = [];
  const filterSkillCompetenceData = [];

  const skillDomains = [];
  const filterSkillDomainData = [];

  const employeesTotal = [];
  const filterEmployeesTotalData = [];


  // const {filteredEmployees} = useChoose()

      // const {newEmployees} = useChoose()

  // const newEmployees = [ ...employees ];

  // const x = filterValue.find((i) => i.type === "Команда");
  // const filteredTeamData = x ? x.arr : null;
  // console.log(x);

  // // for (let i = newEmployees?.length - 1; i >= 0; i--) {
  //   for (let i = newEmployees.length; i--;) {
  //   if (!filteredTeamData?.includes(newEmployees[i].employee_team_name)) {
  //     newEmployees?.splice(i, 1); // Удаляем элемент, если его значение отсутствует в validValues
 
  //   }
  //   // console.log(newEmployees);
  // }
  // console.log(newEmployees);

  /////////////////////

  // employees?.forEach((item) => {
  //   if (!teams.includes(item.employee_team_name)) {
  //     teams.push(item.employee_team_name);
  //     filterTeamData.push({ name: "Команда", options: teams });
  //   }
  //   if (filterTeamData.length < 2) {
  //     filterData.push(filterTeamData[0]);
  //   }
  // });

  employees?.forEach((item) => {
    if (!teams.includes(item.employee_team_name)) {
      teams.push(item.employee_team_name);
      filterTeamData.push({ name: "Команда", options: teams });
    }
    if (filterTeamData.length < 2) {
      filterData.push(filterTeamData[0]);
    }
  });

  employees?.forEach((item) => {
    if (!positions.includes(item.employee_position_name)) {
      positions.push(item.employee_position_name);
      filterPositionData.push({ name: "Специальность", options: positions });
    }
    if (filterPositionData.length < 2) {
      filterData.push(filterPositionData[0]);
    }
  });

  employees?.forEach((item) => {
    if (!grades.includes(item.employee_grade_name)) {
      grades.push(item.employee_grade_name);
      filterGradeData.push({ name: "Грейд", options: grades });
    }
    if (filterGradeData.length < 2) {
      filterData.push(filterGradeData[0]);
    }
  });

  employees?.forEach((obj) => {
    obj.skills.forEach((value) => {
      if (!skillNames.includes(value.skill_name)) {
        skillNames.push(value.skill_name);
        filterSkillNameData.push({ name: "Навык", options: skillNames });
      }

      if (filterSkillNameData.length < 2) {
        filterData.push(filterSkillNameData[0]);
      }
    });
  });

  employees?.forEach((obj) => {
    obj.skills.forEach((value) => {
      if (!skillCompetences.includes(value.skill_competence_name)) {
        skillCompetences.push(value.skill_competence_name);
        filterSkillCompetenceData.push({
          name: "Компетенция",
          options: skillCompetences,
        });
      }

      if (filterSkillCompetenceData.length < 2) {
        filterData.push(filterSkillCompetenceData[0]);
      }
    });
  });

  employees?.forEach((obj) => {
    obj.skills.forEach((value) => {
      if (!skillDomains.includes(value.skill_domain_name)) {
        skillDomains.push(value.skill_domain_name);
        filterSkillDomainData.push({ name: "Домен", options: skillDomains });
      }

      if (
        !filterData.includes(filterSkillDomainData[0]) &&
        filterSkillDomainData.length < 2
      ) {
        filterData.push(filterSkillDomainData[0]);
      }
    });
  });

  filterData.push({ name: `Hard / Soft`, options: ["Hard", "Soft"] });

  employees?.forEach((item) => {
    if (!employeesTotal.includes(item.employee_name_surname)) {
      employeesTotal.push(item.employee_name_surname);
      filterEmployeesTotalData.push({
        name: "Сотрудники",
        options: employeesTotal,
      });
    }

    if (filterEmployeesTotalData.length < 2) {
      filterData.push(filterEmployeesTotalData[0]);
    }
  });

  return {
    filterData,
  };
}

export default useFilter;
