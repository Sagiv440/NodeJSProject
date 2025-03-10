const express = require("express");
const cors = require("cors");

const auth = require("./routers/authRouter")
const employees = require("./routers/employeeRouter")
const department = require("./routers/departmentRouter")
const shift = require("./routers/shiftRouter")
const PORT = require("./settings/consts")

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', auth); 
app.use('/employees', employees);
app.use('/departments', department);
app.use('/shift', shift);


app.listen(PORT.SERVER_PORT, ()=>
{
    console.log(`server is listening at http://localhost:${PORT.SERVER_PORT}`)
})
