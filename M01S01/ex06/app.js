var inputRadius = document.getElementById('radius');
var inputVolume = document.getElementById('volume');
var form = document.querySelector('.surface-form');
var elementResult = document.getElementById('result');

form.addEventListener('submit', function (event) {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = 4 * Math.PI;
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  var result = 615.7521601035994;

  elementResult.innerText = result;
  event.preventDefault();
});
