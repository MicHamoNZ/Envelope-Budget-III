const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(logger(':method :url :res[header]'));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 5001;

const envelopesRouter = require('./routes/envelopes');
app.use('/api/v1/envelopes', envelopesRouter);

const transactionsRouter = require('./routes/transactions.js');
app.use('/api/v1/transactions', transactionsRouter);

const docsRouter = require('./routes/docs');
app.use('/api/v1/swagger', docsRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
