// 1.Initialize the express app
import express, {Express, Request, Response} from "express";

const app: Express = express();

// 2. DefineMiddleware
// Instruct to phase the Request
// Request payload data to be converted to JSON
app.use(express.json());

// 3.Define simple get request
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! Voshadee');
});

export default app