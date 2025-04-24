require('dotenv').config(); // Load environment variables from .env file    

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

module.exports = { connect };