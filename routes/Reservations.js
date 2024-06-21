const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// @route   POST /reserve
// @desc    Create a new reservation
// @access  Public
router.post('/', async (req, res) => {
    try {
        const newReservation = new Reservation(req.body);
        await newReservation.save();
        res.redirect('/payment.html');
    } catch (err) {
        res.status(500).json({ msg: 'Error creating reservation', error: err.message });
    }
});

module.exports = router;
