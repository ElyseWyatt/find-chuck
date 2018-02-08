const path = require('path')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const mapData = require('./routes/mapData')

const server = express()

server.use(bodyParser.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/mapData', mapData)

module.exports = server

