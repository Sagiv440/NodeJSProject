const express = require("express");
const authService = require("../services/authSevice")
const router = express.Router();

// Entry Point: http://localhost:3000/auth

router.post('/login', (req, res)=>
{
    console.log("Just Loging in :)")
    const {username, password} = req.body;
    const token = authService.login(username,password);
    res.json({token});
})

module.exports = router;