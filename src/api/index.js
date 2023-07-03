const express = require('express');
const cors = require('cors');
const app = express();

// Enables CORS
app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure the Entity routes
const routes = express.Router();

//Web Routes
require('./webhooks')(routes);

// Add the routes to the /api endpoint
app.use('/api', routes);


module.exports = app;