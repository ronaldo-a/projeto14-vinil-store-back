import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routers/authRouter.js'

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

// users routes
app.use(authRouter)

app.listen(process.env.PORT_API, ()=> console.log(`Server is listening on ${process.env.PORT_API}`));