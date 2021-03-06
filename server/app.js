if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require("express")
const router = require("./routes/index")
const {errorHandler} = require('./middlewares/errorHandler')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`This app is running on port : ${port}`);
})