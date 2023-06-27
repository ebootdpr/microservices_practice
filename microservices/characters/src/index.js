const server = require("./server");

const PORT = 3002;

server.listen(PORT,()=>{
    console.log("server listening on port: ", PORT);
});