const elemRef = document.querySelector('#categories').children;
for (let elem of elemRef) {
  console.log('Категория: ',elem.firstElementChild.textContent);
  console.log('Количество элементов: ',elem.lastElementChild.children.length);
}

