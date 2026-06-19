import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js";
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/generate.route.js";
import pdfRouter from "./routes/pdf.route.js";
import creditRouter from "./routes/credits.route.js";
import { stripeWebhook } from "./controllers/credits.controller.js";
dotenv.config();

const app = express();

app.post("/api/credits/webhook",
    express.raw({ type: "application/json" }),
    stripeWebhook
)
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));


app.use(express.json());
app.use(cookieParser());
const Port = process.env.PORT || 3026;
app.get("/", (req, res) => {
    res.json({ message: "ExamNote Ai BackEnd Running" });
})
app.use("/api/auth", authRouter);

app.use("/api/user", userRouter)
app.use("/api/notes", notesRouter)
app.use("/api/pdf", pdfRouter);
app.use("/api/credits", creditRouter);

app.listen(Port, () => {
    console.log(`Server is Running ${Port} `);
    connectDb();
})