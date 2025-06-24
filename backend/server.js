const express = require("express");
const ConnectDb = require("./config/db");
const detenv = require("dotenv");
const app = express();
const routes = require("./routes/userRoutes");
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is runnig");
});
