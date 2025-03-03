const employeeRepo = require("../repositories/employRepos")

const getAll = async (filters)=>
{
    const data = await employeeRepo.getAll(filters);
    return data;
}

const getById = async (id)=>
{
    return await employeeRepo.getById(id)
}

const add = async (obj)=>
{
    return await employeeRepo.add(obj);
}

const update = async (id, obj)=>
{
    return await employeeRepo.update(id, obj);
}

const deleteById = async (id)=>
{
    return await employeeRepo.deleteById(id);
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };