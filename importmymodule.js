const http = require('http');
const dt = require('./exportmymodule');

const server = http.createServer((req, res) => {
    //     console.log(req))
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("the date and time are currently:" + dt.myDateTime());
    res.write(req.url);
   // fs.readFile('/index.html');
    res.end();
})
server.listen(8000, () => {
    console.log("port is running on 8000")
});