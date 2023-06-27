const server = require("./server");

const PORT = 3003;

server.listen(PORT,()=>{
    console.log("server listening for planets on port: ", PORT);
});