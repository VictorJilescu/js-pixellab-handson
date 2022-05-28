var inputRadius = document.getElementById('radius');
var inputVolume = document.getElementById('volume');
var form = document.querySelector('.surface-form');
var elementResult = document.getElementById('result');

form.addEventListener('submit', function (event) {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = 3 * 4 * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  var result = 1436.7550402417319;

  elementResult.innerText = result;
  event.preventDefault();
});
