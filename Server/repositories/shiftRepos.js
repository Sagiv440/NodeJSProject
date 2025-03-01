const shiftRepo = require("../module/shiftModel");

//Get
const getAll =(filters) => {
  return shiftRepo.find(filters);
}

const getById = (id) => {
  return shiftRepo.findById(id);
}

// Create
const add = (obj) => {
  const shif = new shiftRepo(obj);
  return shif.save();
}

// Update
const update = (id, obj) => {
  return shiftRepo.findByIdAndUpdate(id, obj);
};

// Delete
const deleteById = (id) => {
  return shiftRepo.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteById,
};