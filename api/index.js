import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRoute);

app.listen(3333);