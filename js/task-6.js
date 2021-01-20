document.getElementById("validation-input").onblur = function () {
  console.log('Количество символов: ', event.target.value.length);
  if (event.target.getAttribute('data-length') > event.target.value.length) { 
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  } else {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  }
};
