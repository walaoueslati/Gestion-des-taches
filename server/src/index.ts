import 'reflect-metadata'
import express, { Application } from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { DataSource } from 'typeorm'
import { schema } from './Schema'
import { Task }from './Entities/Task'
import { Projects } from './Entities/Projects'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'StageDB',
  entities: [Task,Projects], 
  synchronize: false,
  logging: true,
})

const main = async () => {
  await AppDataSource.initialize()
  console.log('✅ Connected to MySQL')

  const app = express()
  app.use(cors())
  app.use(express.json())
   app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
   }))

  app.listen(3001, () => {
    console.log(' SERVER RUNNING ON PORT 3001')
  })
}

main().catch((err) => {
  console.error(' Failed to start server:', err)
})

