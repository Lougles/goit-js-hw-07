const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('#ingredients');
for (let item of ingredients) {
  let createLi = document.createElement('li');
  ulRef.append(createLi);
  createLi.textContent = item;
}
console.log(ulRef);
