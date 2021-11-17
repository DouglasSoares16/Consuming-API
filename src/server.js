const express = require("express");
const routes = require("./routes");

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:5500" }));

app.use(express.json());
app.use(routes);

app.listen(3000, () =>  console.log("running"));