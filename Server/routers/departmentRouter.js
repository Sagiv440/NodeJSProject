const express = require("express")
const departmentService = require("../services/departmentService")
const router = express.Router();
const DB  = require("../configs/Db");
const PORT = require("../settings/consts")

router.use(async (req, res, next) => {
  const token = req.headers['token'];  // Get token from headers
  console.log("Received Token:", token);

  if (!token) {
      return res.status(401).json({ error: "No token provided" });
  }

  // Verify Token
  jwt.verify(token, PORT.SECURITY_KEY, async (err, decoded) => {
      if (err) {
          return res.status(503).json({ error: "Failed to authenticate token" });
      }

      console.log("Decoded Data:", decoded);

      // Extract user ID from token
      const userId = decoded.id;  // Ensure your token contains "id"
      console.log("User ID:", userId);

      // Attach userId to request for later use
      req.userId = userId;

      // Verify actions allowed
      const canProceed = await userActions.logUserAction(userId, 0);
      if (!canProceed) {
          return res.status(403).json({ error: "No more actions allowed" });
      }

      next(); // Move to the next middleware
  });
});

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