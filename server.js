require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Ensure this path is correct
const reservationRoutes = require('./routes/reservations'); // Ensure this path is correct
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
app.use('/auth', authRoutes);
app.use('/reserve', reservationRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));