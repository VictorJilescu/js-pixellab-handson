document.addEventListener('DOMContentLoaded', function () {
  const applyButton = document.querySelector('.applyButton');
  const box = document.querySelector('.box');
  const animationClassName = 'animate-class';

  setTimeout(function () {
    // this is callback
    box.classList.add(animationClassName);

    setTimeout(function () {
      // this is callback

      box.classList.remove(animationClassName);
    }, 2000);
  }, 2000);

  applyButton.addEventListener('click', function () {
    // "this" points to the element
    if (box.classList.contains(animationClassName)) {
      box.classList.remove(animationClassName);
      this.innerText = 'Aplica';
      this.title = 'Aplica';
    } else {
      box.classList.add(animationClassName);
      this.innerText = 'Elimina';
      this.title = 'Elimina';
    }
  });
});
