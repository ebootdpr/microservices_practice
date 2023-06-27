const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use("/characters", createProxyMiddleware({
	target:"http://localhost:8001",
	changeOrigin:true
}))

app.listen(8000)