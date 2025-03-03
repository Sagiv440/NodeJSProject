const express = require("express")
const departmentService = require("../services/departmentService")
const router = express.Router();
const DB  = require("../configs/Db");
const PORT = require("../settings/consts")

router.use(async (req, res, next)=>
{
    /*try
    {
      DB.switchDB(PORT.DEPARTMENT_DB).then(()=>
      {
          next();
      })
    }
    catch(error){
        console.log(`${error}`)
        res.status(505).send(error);
    }*/
    next();
})

//GetAll
router.get("/", async (req, res)=>{
    try{
        const filters = req.query;
        const department = await departmentService.getAll(filters)
        res.send(department);
    }
    catch (error) 
    {
        console.log(`${error}`)
        res.status(500).send(error);
    }
})

//GetId 
router.get("/:id", async (req, res)=>{
    try{
        const { id } = req.params;
        const department = await departmentService.getById(id);
        res.send(department);
    }
    catch (error) 
    {
        res.status(501).send(error);
    }
})

// Add a new employee
router.post('/', async (req, res) => {
    try {
      console.log("Adding new department")
      const empData = req.body;
      const newEmp = await departmentService.add(empData);
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
      const result = await departmentService.update(id, empData);
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Delete a employee
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPer = await departmentService.deleteById(id);
      res.send(deletedPer);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;