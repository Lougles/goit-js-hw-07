const value = document.querySelector('#value');
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

let increment = () => {
  counterValue++;
  value.textContent = counterValue;
}
let decrement = () => {
  counterValue--;
  value.textContent = counterValue;
}
btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

