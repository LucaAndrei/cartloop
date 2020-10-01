const express = require('express');
const cors = require('cors');
const messages = require('./routes/messages');

const app = express();

// Port that the webserver listens to
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/messages', messages);

//Setup Error Handlers
const errorHandlers = require('./handlers/errorHandlers');
app.use(errorHandlers.notFound);
if (process.env.ENV === 'DEVELOPMENT') {
  app.use(errorHandlers.developmentErrors);
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
