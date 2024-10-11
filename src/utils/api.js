import { BASE_URL, EMPLOEES } from "./constants";

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};


export const getEmployeesInfo = () => {
  return fetch(`${BASE_URL}${EMPLOEES}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": `${BASE_URL}`,
    },
  }).then(getResponse);
};

