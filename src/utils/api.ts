import { BASE_URL, EMPLOYEES } from "./constants";

import { TypeEmployee } from "../types/types";

const getResponse = <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getEmployeesInfo = (): Promise<TypeEmployee[]> => {
  return fetch(`${BASE_URL}${EMPLOYEES}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": `${BASE_URL}`,
    },
  }).then(getResponse<TypeEmployee[]>);
};
