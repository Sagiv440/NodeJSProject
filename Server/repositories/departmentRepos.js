const departmentRepo = require("../module/departModel");

//Get
const getAll = (filters)=>
{
    return departmentRepo.find(filters);
}

const getById = (id)=>
{
    return departmentRepo.findById(id);
}

// Create
const add = (obj) => {
    const emp = new departmentRepo(obj);
    return emp.save();
  };
  
  // Update
  const update = (id, obj) => {
    return departmentRepo.findByIdAndUpdate(id, obj);
  };
  
  // Delete
  const deleteById = (id) => {
    return departmentRepo.findByIdAndDelete(id);
  };

  module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };