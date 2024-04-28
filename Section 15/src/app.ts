import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos';
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/todos', todosRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});