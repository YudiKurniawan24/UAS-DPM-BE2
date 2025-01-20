# Back-End Aplikasi Kontak

Ini adalah back-end untuk aplikasi manajemen kontak yang menggunakan Node.js dan Express. Back-end ini menyediakan API untuk operasi CRUD (Create, Read, Update, Delete) pada data kontak.

---

## Prasyarat

1. **Node.js** (versi 14 atau lebih baru)
2. **npm** atau **yarn**
3. **MongoDB** (instalasi lokal atau cloud seperti MongoDB Atlas)

---

## Instalasi

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username/project-repo-backend.git
   cd project-repo-backend
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Konfigurasi file environment:**
   Buat file `.env` di root proyek dan tambahkan konfigurasi berikut:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/kontak
   JWT_SECRET=your_jwt_secret
   ```

   - `PORT`: Port di mana server akan berjalan.
   - `MONGO_URI`: URL koneksi ke database MongoDB.
   - `JWT_SECRET`: Kunci rahasia untuk autentikasi JWT.

---

## Menjalankan Server

1. **Jalankan server:**
   ```bash
   npm start
   ```

2. **Server akan berjalan di:**
   ```
   http://localhost:5000
   ```

---

## Struktur Direktori

```
project-repo-backend/
├── controllers/       # Logika untuk setiap endpoint
├── models/            # Skema database MongoDB
├── routes/            # Rute API
├── middlewares/       # Middleware seperti autentikasi
├── config/            # Konfigurasi database
├── .env               # Konfigurasi environment
├── server.js          # File utama aplikasi
├── package.json       # Dependensi proyek
└── README.md          # Dokumentasi proyek
```

---

## API Endpoint

### Kontak

1. **Mendapatkan semua kontak**
   - **Endpoint:** `GET /api/contacts`
   - **Deskripsi:** Mengembalikan daftar semua kontak.

2. **Menambahkan kontak baru**
   - **Endpoint:** `POST /api/contacts`
   - **Deskripsi:** Menambahkan kontak baru ke database.
   - **Body:**
     ```json
     {
       "name": "John Doe",
       "phone": "1234567890"
     }
     ```

3. **Memperbarui kontak**
   - **Endpoint:** `PUT /api/contacts/:id`
   - **Deskripsi:** Memperbarui informasi kontak berdasarkan ID.
   - **Body:**
     ```json
     {
       "name": "Jane Doe",
       "phone": "0987654321"
     }
     ```

4. **Menghapus kontak**
   - **Endpoint:** `DELETE /api/contacts/:id`
   - **Deskripsi:** Menghapus kontak berdasarkan ID.

---

## Troubleshooting

1. **Server tidak berjalan:**
   - Pastikan Node.js telah diinstal.
   - Periksa konfigurasi di file `.env`.

2. **Database tidak terhubung:**
   - Pastikan MongoDB berjalan.
   - Periksa koneksi `MONGO_URI` di file `.env`.

3. **Kesalahan autentikasi:**
   - Periksa nilai `JWT_SECRET` di file `.env`.

---

## Lisensi

Proyek ini menggunakan lisensi MIT.
