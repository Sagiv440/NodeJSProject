const express = require('express');
const path = require("path");
const PORT = require("../Server/settings/consts");

const app = express();

app.use(express.static(path.join(__dirname, "./public")))

app.listen(PORT.CLIENT_PORT, ()=>
{
    console.log(`Server running at http://localhost:${PORT.CLIENT_PORT}`);
})