const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const message = 'Nu stim ce browser folosesti';

if (userAgentString.includes('chrome')) {
  message = 'Navighez folosind Chrome';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

if (userAgentString.includes('firefox')) {
  message = 'Navighez folosind Firefox';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

const messagePrompt = prompt(`${userAgentString} vrea sa stie cum te cheama.`);
setTimeout(function () {
  const self = this;
  self.messagePrompt = true;
}, 3000);

const userName = document.getElementById('h1');
console.log(`Salut ${userName}!`);

if (userAgentString.includes('explorer')) {
  message = 'Navighez folosing Explorer';
}
paragraphElement.innerText = message;
document.body.append(paragraphElement);
