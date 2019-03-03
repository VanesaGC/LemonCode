import {
  addCarRows,
  retrieveCarId,
  populateEditCarForm,
  retrieveCarFormEditCarForm,
  cleanTable
} from "./uiHelpers";
/*import { 
   getAllCars,
   getCarById,
   addCar 
} from './API/carsApi.double';*/

// XMLHttpRequest
import { getAllCars, getCarById, addCar } from "./API/carsApi2";

document.addEventListener("DOMContentLoaded", () => {
  const buttonLoadCars = document.getElementById("loadcars");
  buttonLoadCars.addEventListener("click", event => {
    event.stopPropagation();
    cleanTable("cars-table");
    getAllCars()
      .then(result => {
        cleanTable("cars-table");
        addCarRows(JSON.parse(result), "cars-table");
      })
      .catch(err => console.log(err));
  });

  const buttonLoadCar = document.getElementById("loadcar");
  buttonLoadCar.addEventListener("click", event => {
    event.stopPropagation();
    const carId = retrieveCarId();
    getCarById(carId)
      .then(result => {
        populateEditCarForm(JSON.parse(result));
      })
      .catch(err => console.log(err));
  });

  const buttonAddCar = document.getElementById("add");
  buttonAddCar.addEventListener("click", event => {
    event.stopPropagation();
    event.preventDefault();
    const car = retrieveCarFormEditCarForm();
    addCar(car).then(result => addCarRows(JSON.parse(result), "cars-table"))
      .then(result => {
        cleanTable("cars-table");
        addCarRows(JSON.parse(result), "cars-table");
      })
      .catch(errorHandler);
  });
});

//Axios
/*import { getAllCars, getCarById, addCar } from "./API/carsApi";

document.addEventListener("DOMContentLoaded", () => {
  const buttonLoadCars = document.getElementById("loadcars");
  buttonLoadCars.addEventListener("click", event => {
    event.stopPropagation();
    cleanTable("cars-table");
    getAllCars();
  });

  const buttonLoadCar = document.getElementById("loadcar");
  buttonLoadCar.addEventListener("click", event => {
    event.stopPropagation();
    const carId = retrieveCarId();
    getCarById(carId);
  });

  const buttonAddCar = document.getElementById("add");
  buttonAddCar.addEventListener("click", event => {
    event.stopPropagation();
    event.preventDefault();
    const car = retrieveCarFormEditCarForm();
    addCar(car);
  });
});*/
