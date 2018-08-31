import { Application, Router } from "express";
import { success } from "log-symbols";
import { Fitness } from "./routes/fitness";
import bodyParser from 'body-parser';

export class App {

  constructor(private app: Application) {
    this.setup();
    this.initRoutes();
  }

<<<<<<< HEAD
  setup() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded());
=======
  setup() { 
>>>>>>> master
    this.app.set("scripts", "./src/ts");
    this.app.set("views", "./src/views");
    this.app.set("view engine", "pug");
  }

  public startServer = (port?: number) => {
    const PORT = port || process.env.PORT || 1337;
    this.app.listen(PORT, () => {
      console.log(success + " Server is listening on port: " + PORT);
    });
  };

  initRoutes() {
    this.app.use("/app", new Fitness(Router()).Router);
  }
}
