const axios = require("axios");

const getAll = async (URL)=>
{
    return axios.get(URL);
}

const getByFeild = async (URL,field,value,)=>
    {
        return axios.get(`${URL}?${field}=${value}`);
    }

const getById = async (URL,Id)=>
    {
        return axios.get(`${URL}/${Id}`);
    }

module.exports = {
    getAll,
    getByFeild,
    getById
}