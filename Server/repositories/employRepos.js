const DB = require("../configs/Db")
const PORT = require("../settings/consts")
const employeeSchema = require("../module/employee")

let employRepo

const connectToDb = (reposFunction)=> async(... args) =>
{
    const db = await DB.switchDB(PORT.EMPLOYEE_DB);
    employRepo = db.model("employee", employeeSchema, PORT.EMPLOYEE_DB)
    return reposFunction(...args)
}

//Get
const getAll = connectToDb( async (filters)=>
{
    return employRepo.find(filters);
})

const getById = connectToDb( async (id)=>
{
    return employRepo.findById(id);
})

// Create
const add = connectToDb( async (obj) => {
    const emp = new employRepo(obj);
    return emp.save();
  });
  
  // Update
  const update = connectToDb( async (id, obj) => {
    return employRepo.findByIdAndUpdate(id, obj);
  });
  
  // Delete
  const deleteById = connectToDb( async (id) => {
    return employRepo.findByIdAndDelete(id);
  });

  module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };