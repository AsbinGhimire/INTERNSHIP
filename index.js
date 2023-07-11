const express = require ('express');
const app = express();
const ejs = require("ejs");
const { sequelize } = require("./model/");
const { registerUser, loginUser } = require('./controller/userController');
// const { loginUser } = require('./controller/userController');
// const { sequelize } = require("./model/blogsModel");

// body batw aako datalai read gar vaneko
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

app.get("/home",(req,res) => {
    res.render('home')
});

// app.get('/',(req,res)=>{
//     res.send("Hello  !!  Its me Asbin Ghimire")
// })

app.get("/login",(req,res) => {
    res.render("login")
});

app.get("/register",(req,res) => {
    res.render("register");
})
app.get("/blog",(req,res) => {
    res.render("blog")
})
app.get("/error",(req,res) => {
    res.render("errors")
})

// aai rw ko data lai rakhne
app.post("/register",registerUser);
// console.log(req.body);

app.post("/login",loginUser);
// console.log(req.body);

app.listen (3000, () =>{
    console.log('server has started on port no: 3000')
})