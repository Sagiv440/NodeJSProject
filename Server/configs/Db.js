const mongoose = require("mongoose");
const PORT = require("../settings/consts")


const connectionPool = {}; // Stores connections to different databases

const connectDB = async (dataSet) => {
    if (connectionPool[dataSet]) {
        console.log(`🔄 Using existing connection to ${dataSet}`);
        return connectionPool[dataSet]; // Return the existing connection
    }

    try {
        const fullpath = `${PORT.MONGODB_ADDRESS}/${dataSet}`;
        console.log(`🌍 Connecting to ${fullpath}`);

        const newConnection = await mongoose.createConnection(fullpath, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        connectionPool[dataSet] = newConnection; // Store connection in pool
        console.log(`✅ Connected to ${dataSet}`);

        return newConnection;
    } catch (error) {
        console.error(`❌ ERROR::Failed to connect to ${dataSet}: ${error}`);
        throw error;
    }
};

const switchDB = async (dataSet) => {
    if (!connectionPool[dataSet]) {
        await connectDB(dataSet);
    }
    return connectionPool[dataSet]; // Return the connection to the requested database
};

module.exports = {
    connectDB,
    switchDB,
};