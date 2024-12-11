import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoutes from "./routes/userRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import bodyParser from "body-parser"
import path from "path" //for deployment porpose

dotenv.config({});

const app = express()

const _dirname = path.resolve()

//middleware 

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
};

app.use(cors(corsOptions))


const PORT = process.env.PORT || 5000;

// Api's

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/company", companyRoutes)
app.use("/api/v1/job", jobRoutes)
app.use("/api/v1/application", applicationRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
    connectDB()
    console.log(`server running on port: ${PORT}`)
})