import bodyParser from 'body-parser';
import express from 'express';
import { success } from 'log-symbols';
import path from 'path';

import { Fitness } from './routes/fitness';

export class App {
  constructor(private app: express.Application) {
    this.setup();
    this.initRoutes();
  }

  public startServer = (port?: number) => {
    const PORT = port || process.env.PORT || 1337;
    this.app.listen(PORT, () => {
      // tslint:disable-next-line:no-console
      console.log(success + ' Server is listening on port: ' + PORT);
    });
  };

  private setup() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.set('scripts', './src/ts');
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'pug');
  }

  private initRoutes() {
    this.app.use(express.static(path.join(__dirname, '/public')));
    this.app.use('/', new Fitness(express.Router()).Router);
  }
}
