const input = document.querySelector('input');
const glode = document.querySelector('.glode');
const arrResponse = ['Да', 'Нет', 'Возможно', 'Не могу сказать', 'Есть сомнения', 'Спросите снова', 'Не сейчас', 'Думаю нет'];

glode.addEventListener('click', () => {

  if (input.value == '') {

    input.value = 'Задайте ваш вопрос!'

  } else if (input.value == 'Задайте ваш вопрос!') {

    input.value = '';

  } else {

    input.value = '';
    glode.innerHTML = '';

    let div = document.createElement('div');
    let numResponse = Math.floor(Math.random() * arrResponse.length);

    div.classList.add('response');
    div.innerHTML = arrResponse[numResponse];

    glode.appendChild(div);
  }

});
