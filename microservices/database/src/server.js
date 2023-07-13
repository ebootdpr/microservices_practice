const expressInstance = require("express")
const morganMiddleware = require("morgan")

const app = expressInstance()
app.use(morganMiddleware("dev"))
app.use(require("./routes"))



module.exports = app