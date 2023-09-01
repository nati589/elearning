import express, { json } from "express";
import authRoutes from "./routes/auth.js";
import cookieParser from 'cookie-parser';

import cors from "cors";

const app= express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.json("success");
})


app.listen(8800, () => {
    console.log("Server running on port 8800...")
})