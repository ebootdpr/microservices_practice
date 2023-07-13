const expressObj = require("express")
const morgan = require("morgan")


const server = expressObj()

morgan ? server.use(morgan("dev")) : undefined;
server.use(expressObj.json())

server.use(require("./routes"))

server.use("*", (req, res) => {
    res.status(404).send(req.baseUrl)
})

server.use((err, req, res, next) => {
    res.status(err.statusCode||503).send({
        error: true,
        message: err.message,
    })
})

module.exports = server;



