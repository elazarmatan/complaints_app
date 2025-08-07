import express from 'express'
import router from './routes/complaints.js'
import {checkPassword} from './routes/complaints.js'

const server = express()
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'))
server.use('/idf/admin',checkPassword)
server.use('/idf',router)


server.listen(process.env.PORT,() => console.log(`server listening on port ${process.env.PORT}`))