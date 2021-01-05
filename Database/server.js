const express = require ('express');
const dotenv = require("dotenv")
const app = express();

const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

const cors = require('cors')

connectDB();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000
app.listen(PORT);
