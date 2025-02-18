const jwt = require("jsonwebtoken")

const login = (username, password)=>
{
    // if 'username' and 'password' are exist in the DB
    if (true) {
        const userId = 'some_id';
        const SECRET_KEY = 'some_key';
        const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
        return token;
    }
}

module.exports= {
    login
}