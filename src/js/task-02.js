const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector("#ingredients");

const elem = ingredients.map(ingredient => {
const ingredientsEl = document.createElement("li");
ingredientsEl.classList.add("item");
ingredientsEl.textContent = ingredient;

return ingredientsEl;})

listIngredients.append(...elem);
