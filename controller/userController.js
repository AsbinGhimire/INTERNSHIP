const{ users } = require("../model")

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
    password: password
}),

// register vaeapaxi login page maa jaa vaneko
res.redirect("/login")
}

