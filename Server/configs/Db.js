const mongoose = require("mongoose");
const PORT = require("../settings/consts")

const connectDB = (dataSet)=>
{
    const fullpath = `${PORT.MONGODB_ADDRESS}/${dataSet}`;
    console.log(`Connecting to ${fullpath}`)
    mongoose.connect(fullpath).then(()=>
    {
        console.log(`Connected to ${dataSet}`)
    }).catch((error)=>console.log(`ERROR::Faild to connect to ${dataSet}: ${error}`))
}
const disconnectDB = () => {
    const dbName = mongoose.connection.name;
    return mongoose.disconnect()
        .then(() => console.log(`Disconnected from ${dbName}`))
        .catch((error) => console.log(`ERROR::Failed to disconnect from ${dbName}: ${error}`));
}

const switchDB = async (dataSet)=>
{
    if(mongoose.connection.name !== dataSet)
        {
            await disconnectDB();
            await connectDB(dataSet);
        }
}
module.exports = {
    connectDB,
    disconnectDB,
    switchDB
};