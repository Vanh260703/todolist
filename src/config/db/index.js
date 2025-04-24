const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/users');
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

module.exports = { connect };