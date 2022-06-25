const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrl = require('./routes/routes')
const cors = require('cors')
const fileUpload = require('express-fileupload');

dotenv.config()

app.use(fileUpload({
    useTempFiles : true
}))


mongoose.connect(process.env.ArticleDataBase, ()=> console.log('connected to article database'))


app.use(express.json())
app.use(cors())
app.use('/app',require('./routes/upload'))
app.use('/app',routesUrl)
app.listen(4000, ()=> console.log('server is up and running'))