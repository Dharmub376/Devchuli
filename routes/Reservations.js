const express = require('express');
const Reservation = require('../models/reservation');

const router = express.Router();

router.post('/reserve', async (req, res) => {
    const reservationData = req.body;

    try {
        const reservation = new Reservation(reservationData);
        await reservation.save();
        res.status(200).json({ msg: 'Reservation created successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
