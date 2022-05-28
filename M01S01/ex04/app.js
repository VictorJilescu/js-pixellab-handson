var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('.surface-form');

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value || 0;
  var result = 0;

  result = Math.PI * 49;

  elementResult.innerText = result;
  event.preventDefault();
});
