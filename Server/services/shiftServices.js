const shiftRepo = require("../repositories/shiftRepos")

const getAll = async (filters)=>
{
    return await shiftRepo.getAll(filters);
}

const getById = async (id)=>
{
    return await shiftRepo.getById(id)
}

const add = async (obj)=>
{
    return await shiftRepo.add(obj);
}

const update = async (id, obj)=>
{
    return await shiftRepo.update(id, obj);
}

const deleteById = async (id)=>
{
    return await shiftRepo.deleteById(id);
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };