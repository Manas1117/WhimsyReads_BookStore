import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/Book.route.js";
import userRoute from "./route/user.route.js";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000

const URI = process.env.MongoDBURI

try {
  mongoose.connect(URI)
  console.log("Connecting to MongoDb")
} catch (error) {
  console.log("Error:",error)
}

//definig routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})