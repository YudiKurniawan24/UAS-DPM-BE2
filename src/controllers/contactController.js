const Contact = require('../models/Contact');

// Mendapatkan semua kontak
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error); // Debugging
    res.status(500).json({ message: 'Error fetching contacts', error });
  }
};

// Menambahkan kontak baru
const addContact = async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ message: 'Name and phone are required.' });
  }

  try {
    const newContact = new Contact({ name, phone });
    const savedContact = await newContact.save();
    console.log('Contact saved to database:', savedContact); // Debugging
    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error saving contact:', error); // Debugging
    res.status(500).json({ message: 'Error saving contact', error });
  }
};

// Memperbarui kontak
const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found.' });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    console.error('Error updating contact:', error); // Debugging
    res.status(500).json({ message: 'Error updating contact', error });
  }
};

// Menghapus kontak
const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found.' });
    }
    res.status(200).json(deletedContact);
  } catch (error) {
    console.error('Error deleting contact:', error); // Debugging
    res.status(500).json({ message: 'Error deleting contact', error });
  }
};

module.exports = { getContacts, addContact, updateContact, deleteContact };
