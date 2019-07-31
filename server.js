const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

// Routes
const children = require('./routes/api/child');

const app = express();

// Bodyparses Middleware
app.use(bodyparser.json());

// Database Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/child', children);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));