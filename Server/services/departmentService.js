const departmentRepo = require("../repositories/departmentRepos")

const getAll = (filters)=>
{
    return departmentRepo.getAll(filters);
}

const getById = (id)=>
{
    return departmentRepo.getById(id)
}

const add = (obj)=>
{
    return departmentRepo.add(obj);
}

const update = (id, obj)=>
{
    return departmentRepo.update(id, obj);
}

const deleteById = (id)=>
{
    return departmentRepo.deleteById(id);
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };