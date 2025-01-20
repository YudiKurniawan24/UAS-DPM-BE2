require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const contactRoutes = require('./src/routes/contactRoutes'); // Tambahkan ini

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'your-default-mongodb-uri';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Gunakan authRoutes untuk autentikasi
app.use('/api/auth', authRoutes);
// Gunakan contactRoutes untuk CRUD kontak
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
