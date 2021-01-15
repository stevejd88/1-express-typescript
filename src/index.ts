import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lasso'] }));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
