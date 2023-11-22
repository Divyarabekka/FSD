import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { dataBaseConection } from "./db.js";
import { userRouter } from "./routes/user.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

dataBaseConection();

app.get("/", (req,res) => {
    res.send({message: "Dashboard working good "});
});

app.use("/api/user",userRouter);
<<<<<<< HEAD
=======

>>>>>>> 2f873b14ef94cb59e620f3b8246363b70874ec11

app.listen(PORT, () => {
    console.log(`server running loclahost ${PORT}`);
});