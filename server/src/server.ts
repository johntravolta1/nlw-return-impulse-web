import cors from 'cors'
import express from 'express'
import { routes } from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())

app.use(bodyParser.json({limit: '1mb'}))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT ||3333, () => console.log('Server is running!'))