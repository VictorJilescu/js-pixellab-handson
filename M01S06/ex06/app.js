function paragraphLog(message) {
  let logContainer = document.querySelector('.logs');
  const messageParagaph = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');

    document.body.append(logContainer);
  }

  messageParagaph.innerText = message;

  logContainer.append(messageParagaph);
}

console.log = paragraphLog;

console.log('Apar in document');
