const express = require("express")
const shiftService = require("../services/shiftServices")
const jwt = require("jsonwebtoken")
const router = express.Router();
const DB  = require("../configs/Db");
const PORT = require("../settings/consts")

router.use(async (req, res, next)=>
{
    /*
    const token = req.headers['x-access-token'];
    console.log(token);
    if (!token) {
      res.status(401).json('No token provided');
    }
  
    jwt.verify(token, PORT.SECURITY_KEY, (err, data) => {
      if (err) {
        res.status(503).json('Failed to authenticate token');
      }
  
      console.log(data);
    });*/

    try
    {
        DB.switchDB(PORT.SHIFT_DB).then(()=>
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
        const shift = await shiftService.getAll(filters)
        res.send(shift);
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
        const employee = await shiftService.getById(id);
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
      const newEmp = await shiftService.add(empData);
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
      const result = await shiftService.update(id, empData);
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Delete a employee
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPer = await shiftService.deleteById(id);
      res.send(deletedPer);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;