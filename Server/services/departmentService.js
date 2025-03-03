const departmentRepo = require("../repositories/departmentRepos")

const getAll = async (filters)=>
{
    return await departmentRepo.getAll(filters);
}

const getById = async (id)=>
{
    return await departmentRepo.getById(id)
}

const add = async (obj)=>
{
    return await departmentRepo.add(obj);
}

const update = async (id, obj)=>
{
    return await departmentRepo.update(id, obj);
}

const deleteById = async (id)=>
{
    return await departmentRepo.deleteById(id);
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };