import country from "./fetchCountries";
import PNotify from "../../node_modules/pnotify/dist/es/PNotify.js";
import info from "./countryInfo.hbs";
import countryName from "./countryList.hbs";

const input = document.querySelector("#search-form");

input.addEventListener("input", inputSearch);

function inputSearch(e) {
  e.preventDefault();
  const value = input.value;
  if (value.length < 3) {
    PNotify.alert("Enter more characters");
    return;
  }
  country(value)
    .then(data => {
      if (data.length == 1) {
        renderInfoCountry(data);
        return;
      }
      if (data.length > 10) {
        PNotify.alert("Refine your search in more detail");
        return;
      }
      const listCountry = document.querySelector(".list-country");
      listCountry.insertAdjacentHTML("beforeend", countryName(data));
    })
    .catch(err => {
      console.log(err);
      PNotify.alert("Refine your search");
    });
}

//Розмітка опису однієї країни
function renderInfoCountry(arrCountryFetch) {
  const countryInfo = document.querySelector(".country-info");
  countryInfo.insertAdjacentHTML("beforeend", info(arrCountryFetch));
}
