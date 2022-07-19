require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./database/database");
const characRoute = require("./Character/charac.routes");
const userRoute = require("./User/user.routes");
const swaggerRoute = require("./swagger/swagger.routes");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/swagger", swaggerRoute);
app.use("/user/", userRoute);
app.use("/character/", characRoute);

connectToDatabase();

app.listen(port, () => console.log(`Rodando em http://localhost:${port}`));
