const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const router = require('./routes/router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => console.log('server is running in PORT ' + PORT));