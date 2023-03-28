// const http = require('http');

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.statusCode = 201;//ok 
//     res.setHeader('Content-Type', 'text/html')
//     //which type of content sended by server

//     res.end('<h1> this is sweety coding world</h1>')


// })
// server.listen(port, () => {
//     console.log(`Server is listining on port ${port}`);
// });

const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
   // res.end('This is http server ');
    res.end('This example is different!');
    res.end('This is http server ');
    
})
server.listen(8080,()=>{
    console.log(`Server is listining on port 8080`);
    console.log('This example is different!');
    console.log('The result is displayed in the Command Line Interface');
});
