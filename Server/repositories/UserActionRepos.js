const jf = require('jsonfile');

const {FILE} = require("../settings/consts");

const getAll = async () => {
  return await jf.readFile(FILE);
};
const getById = async (id) =>
{
  const data = await jf.readFile(FILE);
  const user = data.actions.find((e) => e.id === id);
  return user;
}
const add = async (perObj) => {
    const data = await jf.readFile(FILE);
    data.actions.push(perObj);
    await jf.writeFile(FILE, data)
    return 'Added Successfully';
  };

  const update = async (id, obj) => {
    const data = await jf.readFile(FILE);
    data.actions = data.actions.filter((e) => e.id !== id); // Remove old entry
    data.actions.push(obj); // Add updated object
    await jf.writeFile(FILE, data);
    return 'Updated Successfully';
};
const deleteById = async (id) => {
  const data = await jf.readFile(FILE);
  data.actions = data.actions.filter((e) => e.id !== id); // Remove target entry
  await jf.writeFile(FILE, data);
  return 'Deleted Successfully';
};

  module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
  };