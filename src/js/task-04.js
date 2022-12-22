
let counterValue = 0;
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const valueShow = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
counterValue -=1;
valueShow.textContent = counterValue;})

btnIncrement.addEventListener("click", () => {
counterValue +=1;
valueShow.textContent = counterValue;})

console.log(counterValue);   


