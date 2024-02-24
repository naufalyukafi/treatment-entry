'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();
const {
    PORT,
    API_VERSION,
} = process.env;
assert(PORT, 'PORT is required');

export default {
    port: PORT,
    apiVersion: API_VERSION,
}