// server.js
require('dotenv').config();

const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 8001;

// 1) Serve your app’s public files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/models', express.static(path.join(__dirname, 'public/models')));

// 2) Serve Cesium from npm’s build folder
app.use('/Cesium', express.static(path.join(__dirname,
  'node_modules/cesium/Build/Cesium')));

// 3) Return only the Cesium Ion token in JSON
app.get('/config', (req, res) => {
  res.json({ CESIUM_ION_TOKEN: process.env.CESIUM_ION_TOKEN });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});