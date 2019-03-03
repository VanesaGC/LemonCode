import { httpClient } from "./httpClient";

import {
  addCarRows,
  retrieveCarId,
  populateEditCarForm,
  retrieveCarFormEditCarForm,
  cleanTable
} from "./../uiHelpers";

const BASE_URL = "http://localhost:3050";

export const getAllCars = () => {
  const uri = `${BASE_URL}/api/cars/`;
  return httpClient.get(uri);
};

export const getCarById = id => {
  const uri = `${BASE_URL}/api/cars/${id}`;
  return httpClient.get(uri);
};

export const addCar = car => {
  return httpClient.post(`${BASE_URL}/api/cars/`, car);
};
