const employRepo = require("../module/employee");

//Get
const getAll = (filters)=>
{
    return employRepo.find(filters);
}

const getById = (id)=>
{
    return employRepo.findById(id);
}

// Create
const add = (obj) => {
    const emp = new employRepo(obj);
    return emp.save();
  };
  
  // Update
  const update = (id, obj) => {
    return employRepo.findByIdAndUpdate(id, obj);
  };
  
  // Delete
  const deleteById = (id) => {
    return employRepo.findByIdAndDelete(id);
  };

  module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };