const mongoose = require("mognoose");
const consts = require('../settings/consts');

const connectDB = (dataSet)=>
{
    mongoose.connect(`${consts.MONGODB_ADDRESS}/${dataSet}`).then(()=>
    {
        console.log(`Connected to ${dataSet}`)
    }).catch((error)=>console.log(`ERROR::Faild to connect to ${dataSet}: ${error}`))
}
module.exports = {
    connectDB
}