import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from ""

dotenv.config();

const app = express();

app.use(express.json()); // alows us to accept json data in req.body

app.use("/api/products",)


app.listen(5000, () => {
    connectDB(); 
    console.log("Server Started oh yes");
});

