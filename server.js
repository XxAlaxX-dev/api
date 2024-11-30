const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./config/db");
const routerCandidat= require("./routes/candidates.route");
const routerInterview=require("./routes/interviews.routes");
const routerRecruter = require("./routes/recruiter.routes");
const routerUser =require("./routes/user.route");
const routerStat =require("./routes/statistique.route");
//const { checkRole } = require("./middelwares/authMiddleware");


const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/api/candidates",routerCandidat);
app.use("/api/interviews",routerInterview);
app.use("/api/recruiters",routerRecruter);
app.use("/api/users",routerUser);
app.use("/api/stat",routerStat);
/*
routerUser.get("/recruteurs-only", checkRole("recruteur"), (req, res) => {
  res.status(200).json({ message: "Accès réservé aux recruteurs" });
});*/
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(PORT, () => {
  console.log(
    `Server is running on port http://localhost:${PORT} on ${process.env.NODE_ENV} mode`
  );
});
db();
