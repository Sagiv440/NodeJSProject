const DB = require("../configs/Db")
const PORT = require("../settings/consts")
const shiftSchema = require("../module/shiftModel")

let shiftRepo

const connectToDb = (reposFunction)=> async(... args) =>
{
    const db = await DB.switchDB(PORT.SHIFT_DB);
    shiftRepo = db.model("shift", shiftSchema, PORT.SHIFT_DB)
    return reposFunction(...args)
}

//Get
const getAll = connectToDb( async (filters)=>
{
    return shiftRepo.find(filters);
})

const getById = connectToDb( async (id)=>
{
    return shiftRepo.findById(id);
})

// Create
const add = connectToDb( async (obj) => {
    const emp = new shiftRepo(obj);
    return emp.save();
  });
  
  // Update
  const update = connectToDb( async (id, obj) => {
    return shiftRepo.findByIdAndUpdate(id, obj);
  });
  
  // Delete
  const deleteById = connectToDb( async (id) => {
    return shiftRepo.findByIdAndDelete(id);
  });

  module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };