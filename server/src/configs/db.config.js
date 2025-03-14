const mongoose = require('mongoose');

async function db() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('🥭 Connected to MongoDB successfully');

        // Handle connection errors after initial connection
        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

module.exports = db;