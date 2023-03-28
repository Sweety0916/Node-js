const express = require('express');
const app = express()
const fs=require('fs');
const sys=require('sys');
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
    // res.send('this is about page!')
    fs.readFile('/index.html');
    // res.end(data.toString());
  })
  
  
app.listen(port, () => {
  console.log(`express app listening on port ${port}`)
})
// app.listen(3000);
// console.log('express server started');