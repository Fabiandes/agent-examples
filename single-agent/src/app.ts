import Express, {Request, Response} from 'express';

const app = Express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

export default app;
