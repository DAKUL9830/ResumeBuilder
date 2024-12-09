require('dotenv').config();
const path=require('path');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnect = require('./dbConnect');
const userRoute = require('./routes/useRoute.js');

const app = express();

// Middleware
//app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// User Routes
app.use('/api/user', userRoute);

// Placeholder route for health check (optional)
// app.get('/', (req, res) => {
//     res.send('API is running...');
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
