const express = require ('express');
const app = express();
const ejs = require("ejs");
const { sequelize } = require("./model/");
const { registerUser } = require('./controller/userController');
// const { sequelize } = require("./model/blogsModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/",(req,res) => {
    res.render('home')
})

// app.get('/',(req,res)=>{
//     res.send("Hello  !!  Its me Asbin Ghimire")
// })

app.get("/login",(req,res) => {
    res.render("login")
})

app.get("/register",(req,res) => {
    res.render("register")
})

app.post("/register",registerUser)

app.listen (3000, () =>{
    console.log('server has started on port no: 3000')
})