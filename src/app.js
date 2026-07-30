const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const territoryRoutes = require("./routes/territory.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/territories",territoryRoutes);

app.use("/api/users", userRoutes);

module.exports = app;