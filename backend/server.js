const express = require("express");
const bodyParser=require("body-parser");
const ConnectDb = require("./config/db");
const detenv = require("dotenv");
const app = express();
const routes = require("./routes/userRoutes");
const apiRoutes=require("./routes/apiRoutes.cjs");
const cors = require("cors");





detenv.config();
ConnectDb();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true
  })
);
app.use(express.json());





app.use("/user", routes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is runnig");
});
