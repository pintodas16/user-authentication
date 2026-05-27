const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();



app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://user-authentication-client-mu.vercel.app/', // ✅ replace with your actual frontend URL
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type','Authorization']
}));
app.use(express.json());
// Replace your current cors config with this temporarily


// Routes
app.use('/api/auth', require('./routes/auth'));

// Health check
app.get('/', (req, res) => res.json({ message: 'Auth API running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));