require('dotenv').config() // IN THIS FILE VARIABLE DECLARE FOR ANY OTHER SYSTEM RUN THE APLICATION
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Mannu!')
})

app.get('/login',(req,res)=>{
    res.send("Hello my Backend Development") //send request  toserver
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`) // listen server 
})