import { useEffect, useMemo, useState } from "react";
import { employees } from "../utils/employees";
import { getFilterValue } from "../services/filter/reducer";
import { useAppSelector } from "./hooks";

function useChoose(props) {
  const filterValue = useAppSelector(getFilterValue);

  const [newEmployees, setNewEmployees] = useState();

  useEffect(() => {setNewEmployees(employees)}, []);

  const typeTeam = filterValue.find((i) => i.type === "Команда");
  const filteredTeamData = typeTeam ? typeTeam.arr : null;

  // for (let i = newEmployees.length; i--; ) {
  //   if (!filteredTeamData?.includes(newEmployees[i].employee_team_name)) {
  //     newEmployees?.splice(i, 1);
  //   }
  //   // console.log(newEmployees);
  // }

  // console.log(newEmployees);

  const filteredTeams = useMemo(() => {
    // Создаём копию массива, чтобы не мутировать оригинальный
    // const employeesCopy = [...employees];

    for (let i = newEmployees?.length; i--; ) {
      // Проверяем, содержится ли имя команды в filteredTeamData
      if (!filteredTeamData?.includes(newEmployees[i].employee_team_name)) {
        // Удаляем элемент, если его значение отсутствует в filteredTeamData
        newEmployees.splice(i, 1);

        // setNewEmployees(newEmployees);
        // console.log(newEmployees);
      }
    }
    setNewEmployees(newEmployees);
    console.log(newEmployees);
    // return newEmployees; // Возвращаем отфильтрованный массив
  }, [filteredTeamData]); // Зависимости

  console.log(newEmployees);

  ///////////////////////////////////////////

  const typeGrade = filterValue.find((i) => i.type === "Грейд");
  const filteredGradeData = typeGrade ? typeGrade.arr : null;

  const filteredGrades = useMemo(() => {
    // Создаём копию массива, чтобы не мутировать оригинальный
    // const employeesCopy = [...employees];

    for (let i = newEmployees?.length; i--; ) {
      // Проверяем, содержится ли имя команды в filteredTeamData
      if (!filteredGradeData?.includes(newEmployees[i].employee_grade_name)) {
        // Удаляем элемент, если его значение отсутствует в filteredTeamData
        newEmployees.splice(i, 1);
        // console.log(newEmployees);

        // setNewEmployees(newEmployees);
        // console.log(newEmployees);
      }
    }
    setNewEmployees(newEmployees);
    console.log(newEmployees);

    // return newEmployees; // Возвращаем отфильтрованный массив
  }, [filteredGradeData]); // Зависимости

  console.log(newEmployees);

  // for (let i = newEmployees.length; i--; ) {
  //   if (!filteredGradeData?.includes(newEmployees[i].employee_grade_name)) {
  //     newEmployees?.splice(i, 1);
  //   }
  //   console.log(newEmployees);
  //   return newEmployees;
  // }

  // console.log(newEmployees);
  ///////////////////////////////////////////

  // const typePosition = filterValue.find((i) => i.type === "Команда");
  // const filteredPositionData = typePosition ? typePosition.arr : null;

  // for (let i = newEmployees.length; i--; ) {
  //   if (!filteredPositionData?.includes(newEmployees[i].employee_position_name)) {
  //     newEmployees?.splice(i, 1);
  //   }
  //   console.log(newEmployees);
  // }

  // console.log(newEmployees);
  // ///////////////////////////////////////////

  return {
    newEmployees,
    // filteredEmployees,
    // filteredGrades,
    // filteredTeams,
  };
}

export default useChoose;
