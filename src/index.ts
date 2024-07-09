import express, { Request, Response } from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World !',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port:${PORT}`);
});

export default app;
