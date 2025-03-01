const shiftRepo = require("../repositories/shiftRepos")

const getAll = (filters)=>
{
    return shiftRepo.getAll(filters);
}

const getById = (id)=>
{
    return shiftRepo.getById(id)
}

const add = (obj)=>
{
    return shiftRepo.add(obj);
}

const update = (id, obj)=>
{
    return shiftRepo.update(id, obj);
}

const deleteById = (id)=>
{
    return shiftRepo.deleteById(id);
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };