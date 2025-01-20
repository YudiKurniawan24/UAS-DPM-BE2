// Middleware untuk Autentikasi
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    // Ambil token dari header Authorization
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    // Jika tidak ada token, tolak akses
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Tambahkan informasi user ke request
    req.user = decoded;
    next(); // Lanjut ke endpoint berikutnya
  } catch (error) {
    console.error('Error in authentication middleware:', error);
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = authMiddleware;
