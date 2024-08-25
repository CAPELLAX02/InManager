require('dotenv').config();
import express, { Request, Response, NextFunction, Express } from 'express';

const app: Express = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`);
});
