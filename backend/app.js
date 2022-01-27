
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors');
const PORT = 3001

const app = express()
app.use(cors())

Article = require('./api/model/articleModel') //created model loading here

//connect to DB //cloud.mongodb.com (connect via gmail account)
const DB_URI = `mongodb+srv://shey:shey2022@cluster0.mc9b3.mongodb.net/Cluster0?retryWrites=true&w=majority`
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        app.listen(PORT)
        console.log("connected to DB")
        console.log("App running on port 3001")
    })
    .catch(error => console.log(error))

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true})) //to receive POST DATA
app.use(express.json());

const routes = require('./api/routes/articleRoutes'); //importing route
routes(app); //register the route

app.get('/', (req, res)=>{
    res.status(200).send({url : 'Welcome to articles website'})
})

//404
app.get('*', (req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
})