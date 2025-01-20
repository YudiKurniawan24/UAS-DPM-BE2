const express = require('express');
const { getContacts, addContact, updateContact, deleteContact } = require('../controllers/contactController');

const router = express.Router();

router.get('/', getContacts); // Mendapatkan semua kontak
router.post('/', addContact); // Menambahkan kontak baru
router.put('/:id', updateContact); // Memperbarui kontak berdasarkan ID
router.delete('/:id', deleteContact); // Menghapus kontak berdasarkan ID

module.exports = router;
