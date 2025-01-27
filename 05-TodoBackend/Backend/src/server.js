import express from "express"
import cors from 'cors'
import {todoRouter} from './route/todoRoute.js'
import { connectdb } from "./db/db.js";

const app = express();
app.use(cors());
app.use(express.json());
connectdb();

app.use('/user',(req,res)=>{
    res.send("api working")
})

app.use("/api",todoRouter)

const port = 4000;

app.listen(port,()=>{
    console.log(`Server is running on port  http://localhost:${port}`);
})