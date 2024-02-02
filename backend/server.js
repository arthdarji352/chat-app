import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
