const{ users } = require("../model")
const bcrypt = require('bcrypt');

//for registration 
exports.registerUser = async(req,res)=>{
console.log(req.body);
 
// const name = req.body.name
// const email = req.body.email
// const password = req.body.password
const {name, email, password} = req.body
 console.log(name, email, password);


// await users.create(req.body) 

await users.create({
    name: name,
    email: email,
    password: bcrypt.hashSync(password,10),
}),

// register vaeapaxi login page maa jaa vaneko
res.redirect("/login")
}



// for login
exports.loginUser = async(req,res)=>{
    // 
}