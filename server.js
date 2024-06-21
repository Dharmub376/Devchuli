// server.js
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/reservation', require('./routes/reservation'));

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
