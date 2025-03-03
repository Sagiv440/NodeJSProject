const express = require("express");
const authService = require("../services/authSevice")
const router = express.Router();

// Entry Point: http://localhost:3000/auth

router.post('/login', async (req, res)=>
{
    console.log("Just Loging in :)")
    const {username, email} = req.body;
    const token = await authService.login(username,email);
    res.json({token});
})

module.exports = router;