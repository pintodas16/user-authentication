const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// Replace your current cors config with this temporarily
app.use(cors());
// app.use(cors({
//   origin: (origin, callback) => {
//     const allowed = process.env.CLIENT_URLS?.split(",") || [];
//     if (!origin || allowed.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// }));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Health check
app.get('/', (req, res) => res.json({ message: 'Auth API running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));