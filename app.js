const venom = require('venom-bot');

venom
  .create('session')
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

const chats = [
  'Hi',
  'Hello',
];

function start(client) {
  client.onMessage((message) => {
    if (chats.indexOf(message.body) > -1 && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Hello')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}