const jwt = require("jsonwebtoken")
const webRepos = require("../repositories/webRepos")
const PORT = require("../settings/consts")

const login = async (username, email)=>
{
    const user = await webRepos.getByFeild(PORT.USERS_LIST,"username", username)
    console.log(user);
    console.log(`loging credentials: ${username} / ${email} \n and the loaded user is: ${user}`);
    if(user === null){
        return { error: "Wrong Credentials" };
    }
    else if (user.data[0].email.toLowerCase() !== email.toLowerCase()) {
        return { error: "Wrong Credentials" };
    }else{
        const token = jwt.sign({ id: user.data[0].id }, PORT.SECURITY_KEY, { expiresIn: '1h' });
        return token;
    }

}

module.exports= {
    login
}