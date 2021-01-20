// document.querySelector('#name-input').addEventListener('')
const nameRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

nameRef.addEventListener('input', event => {
  outputRef.textContent = event.target.value === '' ? 'Незнакомец' : event.target.value;
});