// server.js
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/reservation', require('./routes/reservation'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
