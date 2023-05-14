import express from 'express';
import router from './routes/route';
require('dotenv').config();

const PORT = process.env.PORT

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log("🖥️  Server is running!"))