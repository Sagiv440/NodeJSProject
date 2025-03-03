const DB = require("../configs/Db")
const PORT = require("../settings/consts")
const departSchema = require("../module/departModel")

let departmentRepo

const connectToDb = (reposFunction)=> async(... args) =>
{
    const db = await DB.switchDB(PORT.DEPARTMENT_DB);
    departmentRepo = db.model("department", departSchema, PORT.DEPARTMENT_DB)
    return reposFunction(...args)
}

//Get
const getAll = connectToDb( async (filters)=>
{
    return departmentRepo.find(filters);
})

const getById = connectToDb( async (id)=>
{
    return departmentRepo.findById(id);
})

// Create
const add = connectToDb( async (obj) => {
    const emp = new departmentRepo(obj);
    return emp.save();
  });
  
  // Update
  const update = connectToDb( async (id, obj) => {
    return departmentRepo.findByIdAndUpdate(id, obj);
  });
  
  // Delete
  const deleteById = connectToDb( async (id) => {
    return departmentRepo.findByIdAndDelete(id);
  });

  module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };