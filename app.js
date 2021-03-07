const express = require("express");
const app = express();
const port = 8000;
require("./models/index");
const userCtrl = require("./controllers/userControllers");

app.get("/add", userCtrl.addUser);
app.get("/crud", userCtrl.crudOperation);
app.get("/query", userCtrl.queryData);
app.get("/finder", userCtrl.finderData);

app.listen(port, ()=>{
    console.log(`server start at ${port}`)
})
