const employeeRepo = require("../repositories/employRepos")

const getAll = (filters)=>
{
    return employeeRepo.getAll(filters);
}

const getById = (id)=>
{
    return employeeRepo.getById(id)
}

const add = (obj)=>
{
    return employeeRepo.add(obj);
}

const update = (id, obj)=>
{
    return employeeRepo.update(id, obj);
}

const deleteById = (id)=>
{
    return employeeRepo.deleteById(id);
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };