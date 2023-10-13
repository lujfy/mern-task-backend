const dotenv = require('dotenv').config();
const express = require('express')
const connectDB = require('./config/connectDB');
const { default: mongoose } = require('mongoose');
const Task = require('./model/taskModel') ;
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')

const app = express() ;



// middleware 
app.use(express.json())
app.use(express.urlencoded( {extended : false} ))


app.use(cors(
    {
        origin : ['http://localhost:3000/' , 'https://mern-task-app-zw6o.onrender.com' ]
    }
))

app.use('/api/tasks' ,taskRoutes)



// routes

app.get('/' , (req , res) => {
    res.send('Homepage')
})



const PORT = process.env.PORT || 5000


mongoose
.connect(process.env.MONGO_URI)
.then (
    () => {
        app.listen(PORT , () => {
            console.log(`server running on PORT ${PORT}`)
        })
    }
)
.catch((error) => console.log(error))