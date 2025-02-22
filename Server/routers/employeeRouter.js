const express = require("express")
const employeeService = require("../services/employeeServices")
const router = express.Router();
const DB  = require("../configs/Db");
const PORT = require("../settings/consts")

router.use(async (req, res, next)=>
{
    try
    {
        //await DB.disconnectDB();
        //await DB.connectDB(PORT.EMPLOYEE_DB);
        DB.switchDB(PORT.EMPLOYEE_DB).then(()=>
        {
            next();
        })
    }
    catch(error){
        res.status(500).send(error);
    }
})

//GetAll
router.get("/", async (req, res)=>{
    try{
        const filters = req.query;
        const employee = await employeeService.getAll(filters)
        res.send(employee);
    }
    catch (error) 
    {
        res.status(500).send(error);
    }
})

//GetId 
router.get("/:id", async (req, res)=>{
    try{
        const { id } = req.params;
        const employee = await employeeService.getById(id);
        res.send(employee);
    }
    catch (error) 
    {
        res.status(501).send(error);
    }
})

// Add a new employee
router.post('/', async (req, res) => {
    try {
      console.log("Adding new employee")
      const empData = req.body;
      const newEmp = await employeeService.add(empData);
      res.status(201).send(`The new ID: ${newEmp._id}`);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
// Update a employee
  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const empData = req.body;
      const result = await employeeService.update(id, empData);
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Delete a employee
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPer = await employeeService.deleteById(id);
      res.send(deletedPer);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;