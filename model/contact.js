const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    umur: {
        type: Number,
        required: false,
    },
    tanggal_lahir: {
        type: Date,
        required: false,
    },
    nomor_telepon: {
        type: String,
        required: false,
    },
    alamat: {
        type: String,
        required: false,
    },
    foto: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
