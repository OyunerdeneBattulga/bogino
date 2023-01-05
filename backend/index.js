const connect = require("./helper/db")

connect();

const express = require('express');
const linksRouter = require("./Route/linkRoute")

const port = 8000;
const app = express();
app.use(express.json());
app.use('/link', linksRouter)                                                             
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});