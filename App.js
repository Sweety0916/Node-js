const http = require('http')
function dataControl(req,resp)
{
    resp.write("<h1> hello this is sweety's nodejs tut</h1>");
    resp.end();
}
http.createServer(dataControl).listen(4500);

// function test(a)
// {
//     return a*10;
// }
// const test =(a)=>a*10
http.createServer((req,resp)=>{
    resp.write("<h1> hello this is sweety's nodejs tut</h1>");
    resp.end();
}).listen(4500);
//ddf