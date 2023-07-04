const{ users } = require("../model")

//for registration 
exports.registerUser = async(req,res)=>{
// console.log(req.body);
await users.create(req.body)
res.redirect("/login")
}

// for login
