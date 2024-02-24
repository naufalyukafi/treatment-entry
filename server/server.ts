import config from './src/config'
const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet')
const { logging } = require('./src/middleware/logging');

dotenv.config();
const app = express();

app.use(cors());
app.use(helmet());

app.use(logging);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(`/api/v${config.apiVersion}`, require("./src/routes"));

app.listen(config.port, () => console.log(`App listening on port http://localhost:${config.port}!`));