import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routers/authRouter.js'
import portifolioRouter from './routers/portifolioRouter.js'

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

// users routes
app.use(authRouter)

// portifolio routes
app.use(portifolioRouter)

app.listen(process.env.PORT_API, () => console.log(`Server is listening on ${process.env.PORT_API}`));