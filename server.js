import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from './routes/authRoute.js';


dotenv.config();

const app = express();

connectDB();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


app.use('/api/v1/auth',authRoutes )


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
