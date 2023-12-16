import DataSource from "../data/data-source.js";
import "../components/meal-item.js";
import "../components/footer-bar.js";
import "../components/app-header.js";

function main() {
  const searchElement = document.querySelector("search-bar");
  const mealContainer = document.querySelector(".meals-container");

  async function onButtonSearchClicked() {
    document.querySelector("#tips").classList.remove("hide");
    try {
      mealContainer.innerHTML = "";
      const meals = await DataSource.searchMealByName(searchElement.value);
      meals.forEach((meal) => {
        const mealCard = document.createElement("meal-item");
        mealCard.meal = meal;
        mealContainer.appendChild(mealCard);
      });
    } catch (e) {
      alert("Food data not found :(");
    }
  }

  searchElement.clickEvent = onButtonSearchClicked;
}

export default main;
