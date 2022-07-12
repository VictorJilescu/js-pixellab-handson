const imageElement = document.querySelector('.image');

const messageParagraph = document.querySelector('.message');
imageElement.onload = function () {
  messageParagraph.innerText = 'Imaginea s-a incarcat';
  const url = this.src;
  this.addEventListener('click', function () {
    alert(`Imaginea de la URL: ${this.src}, s-a incarcat.`);
  });
};
