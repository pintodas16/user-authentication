const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();



app.use(cors({
  origin: '*',  // or your frontend URL e.g. 'http://localhost:3000'
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
// Replace your current cors config with this temporarily


// Routes
app.use('/api/auth', require('./routes/auth'));

// Health check
app.get('/', (req, res) => res.json({ message: 'Auth API running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));