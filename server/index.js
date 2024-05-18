const express = require('express')
const pool = require('./dbConfig')
const app = express()
const port = 8800

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err)
  }
  if (connection) {
    connection.release()
    console.log("Connected to CMS DB")
  }
  return
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})


app.get("/",(req,res)=>{
    res.send("Hello World")
})