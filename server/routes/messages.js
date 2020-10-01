const { Router } = require('express');
const router = Router();
const BOT_NAME = 'Jane Doe';
const PREDEFINED_MESSAGES = [
  'Hi there !',
  'I see you haven\'t finished your shopping.',
  'Is there anything I can help you with?',
  'Make sure you buy everything before the stock runs out ;)'
];
let CACHE = {};

router.get('/', (req, res) => {
  res.status(200).send(CACHE);
  if (CACHE && CACHE.message) {
    CACHE = {};
  }
});

router.post('/', (req, res) => {
  const messageFromUser = {
    message: req.body.message,
    sender: req.body.sender
  };
  const insertResponseRandomTimeout = Math.floor(Math.random() * 5) + 1;
  setTimeout(() => {
    CACHE = {
      sender: BOT_NAME,
      message : PREDEFINED_MESSAGES[Math.floor(Math.random() * PREDEFINED_MESSAGES.length)]
    };
  }, insertResponseRandomTimeout * 1000);
  res.status(201).send(messageFromUser);
});

module.exports = router;
