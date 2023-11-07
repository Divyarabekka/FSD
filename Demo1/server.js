import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { dataBaseConection } from "./db.js";
import { userRouter } from "./routes/user.js";
import { notesRouter } from "./routes/notes.js";
import { isAuthorized } from "./middlewares/auth.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

dataBaseConection();

app.get("/", (req,res) => {
    res.send({message: "working good"});
});


app.use("/api/user",userRouter);
app.use("/api/notes",isAuthorized ,notesRouter);

app.listen(PORT, () => {
    console.log(`server running loclahost ${PORT}`);
});