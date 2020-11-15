const express = require('express')
const todoRouter = require('./routes/todos')
const connectDB = require('./db')
const cors= require('cors')

connectDB()



const app = express();
app.use(cors())
app.use(express.json())
app.use('/todos', todoRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT , console.log('server listening at '+ PORT))