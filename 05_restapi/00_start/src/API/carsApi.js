import axios from "axios";
import {
  addCarRows,
  retrieveCarId,
  populateEditCarForm,
  retrieveCarFormEditCarForm,
  cleanTable
} from "./../uiHelpers";

const BASE_URL = "http://localhost:3050";

export const getAllCars = () => {
  axios
    .get(`${BASE_URL}/api/cars/`)
    .then(result => {
      cleanTable("cars-table");
      addCarRows(result.data, "cars-table");
    })
    .catch(err => console.log(err));
};

export const getCarById = id => {
  axios
    .get(`${BASE_URL}/api/cars/${id}`)
    .then(result => {
      populateEditCarForm(result.data);
    })
    .catch(err => console.log(err));
};

export const addCar = car => {
  axios
    .post(`${BASE_URL}/api/cars/`, car)
    .then(result => addCarRows(result.data, "cars-table"))
    .then(result => {
      cleanTable("cars-table");
      addCarRows(result.data, "cars-table");
    })
    .catch(errorHandler);
};
