const express = require('express');
const bodyParser = require('body-parser');
require('./db/connection');

const app = express();
const router = require('./router/router');
const cors = require('cors');
const port = process.env.PORT || 8000;

// app.use(bodyParser.json({ limit: '50mb' })); 
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
