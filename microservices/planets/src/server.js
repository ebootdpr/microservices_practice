const express = require("express")
const morgan = require("morgan")

const server = express()
morgan ? server.use(morgan("dev")): undefined
server.use(express.json())

module.exports = server