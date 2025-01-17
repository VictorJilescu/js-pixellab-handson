const mouseIn = document.querySelector('.mouseIn');
const stage = document.querySelector('.stage');

stage.addEventListener('mouseover', function () {
  // this este elementul de DOM in function
  const message = 'Mouseul este pe scena';

  // console.log(message);
  showMessage('.message', message);
});
stage.addEventListener('mouseout', function () {
  const message = 'Mouseul NU este pe scena';

  showMessage('.message', message);
});

mouseIn.addEventListener('mousein', function () {
  const message = Number();

  showMessage('.message', message);
});

const showMessage = (targetSelector = 'message', message) => {
  let element = document.querySelector(targetSelector);

  if (element === null) {
    // jQuery avea .text()
    element = document.createElement('p');
    element.classList.add(targetSelector.replace('.', ''));
    document.body.append(element);
  }

  element.innerText = message;
};
