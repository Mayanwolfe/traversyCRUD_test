const express= require ('express')
const dotenv = require ('dotenv')
const morgan = require ('morgan')
const exphbs = require('express-handlebars')

const connectDB = require('./config/db')

//Load config
dotenv.config({ path:'./config/config.env'})

connectDB()

const app = express()

 if(process.env.NODE_ENV === 'development'){
    app.use (morgan('dev'))
 }
 // Handlesbars
 

const PORT= process.env.PORT || 8500

app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)