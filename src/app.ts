import dotenv from 'dotenv'
import express from 'express'
// routes
import routes from './routes'

dotenv.config({
  path: '.env',
})

const app = express()
app.use(routes)
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000
app.listen(
  port,
  () => console.log('running', port)
  
  // async () => await sequelize.sync({ force: true }),
)