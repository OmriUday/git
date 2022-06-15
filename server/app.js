const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const indexRouter = require('./routes/index-routes');
const queryhistoryRouter = require('./routes/queryhistory-routes');

app.use('/api/searchhistory', queryhistoryRouter);
app.use('/', indexRouter);

app.listen(port);
