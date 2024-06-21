const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    departureCity: { type: String, required: true },
    departureDate: { type: Date, required: true },
    departureShift: { type: String, required: true },
    seatType: { type: String },
    arrivalCity: { type: String, required: true },
    idType: { type: String, required: true },
    idNumber: { type: String, required: true },
    countryIssuance: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Reservation', ReservationSchema);
