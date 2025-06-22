import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import mongoose from "mongoose";
import cors from 'cors';
import {connectToSocket} from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js';

const app = express();
const server= createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 3000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({extended:true,limit:"40kb"}));

app.use("/api/v1/users",userRoutes);


const start=async()=>{
    app.set("mongo_user")
    const connectionDb=await mongoose.connect("mongodb+srv://srushtigadakh441:K1bXOfj5QgOnvWim@cluster0.0udxccq.mongodb.net/");
    console.log(`Connected to MongoDB at ${connectionDb.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log("Server is running on port 3000");
    })
}
start();