const http = require('http');
const path = require('path')

const filePath = path.join(__dirname, 'node_modules', 'index.js')

const HOST_NAME = 'localhost';
const PORT = 8900


const server = http.createServer((req, res) =>{
  res.write('Hello! My name is David Olumuyiwa from altschool of Engineering.')
  res.end()

})


server.listen(PORT, HOST_NAME, ()=>{
  console.log(`server is listening at http://${HOST_NAME}:${PORT}`)
})