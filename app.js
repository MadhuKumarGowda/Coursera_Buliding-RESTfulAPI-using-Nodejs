

const express = require('express')

const config = require("./config");
const app = express();
const productsRouter = require("./src");

const LoggerMiddlewear = (req,res,next) =>{
  console.log(`Logged ${req.url} and ${req.method}`);
  next();
}

app.use(LoggerMiddlewear);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/products", productsRouter);


const server = app.listen(config.PORT, () => {
  console.log('Listening on port', config.PORT);
});

module.exports = server;
