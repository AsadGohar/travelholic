const express = require ('express');
const dotenv = require("dotenv")
const app = express();
//const HttpError = require('./Models/HttpError');
const connectDB = require('./config/db')
dotenv.config({path: './config/config.env'})
const cors = require('cors')

// IMPORTING ROUTES HERE
//const DestinationRoutes = require('./Routes/DestinationRoutes');
const AnswerRoutes = require('./Routes/AnswerRoutes');
const UserRoutes = require('./Routes/UserRoutes');
const QuestionRoutes = require('./Routes/QuestionRoutes');



app.use(express.json());
app.use(cors());

//Use the routes here
//app.use('/destinations', DestinationRoutes);
app.use('/api/answer', AnswerRoutes)
app.use('/api/user', UserRoutes)
app.use('/api/question', QuestionRoutes)




//Error handling on server side
// app.use((req, res, next) => {
//     const error = new HttpError('Could not find this route.', 404);
//     throw error;
//   });
  
// app.use((error, req, res) => {
//     if(res.headerSent) {
//         return next(error);
//     }
//     res.status(errorCode || 500)
//     res.json({message: error.message || 'An unknown error has occurred!'});
// });


//DATABASE CONNECTION HERE
connectDB();
const PORT = process.env.PORT || 4000
app.listen(PORT);
