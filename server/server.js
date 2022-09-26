const path = require('path');
const express = require('express');

// const dotenv = require('dotenv');
// dotenv.config();

// Import controllers


const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;