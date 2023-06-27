const server = require("./server");

const PORT = 3001;

server.listen(PORT,()=>{
    console.log("server listening for characters on port: ", PORT);
});