import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './Schema';
import sequelize from './database/connection'; 
import dotenv from 'dotenv';

dotenv.config();

export const createServer = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  try {
    await sequelize.authenticate();
    console.log(' Connected to MySQL with Sequelize');

    await sequelize.sync({ alter: true }); 
  } catch (error) {
    console.error('Database connection failed:', error);
    return;
  }

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log(' SERVER RUNNING ON PORT 3001');
  });
};
createServer();