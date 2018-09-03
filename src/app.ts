import express, { Application, Router } from "express";
import forceSSL from "force-ssl-heroku";
import path from "path";
import { success } from "log-symbols";
import { Fitness } from "./routes/fitness";
import bodyParser from "body-parser";
import { serveStatic } from "serve-static";

export class App {
  constructor(private app: Application) {
    this.app.use(forceSSL);
    this.setup();
    this.initRoutes();
  }

  setup() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.set("scripts", "./src/ts");
    this.app.set("views", path.join(__dirname, "src/views"));
    this.app.set("view engine", "pug");
  }

  public startServer = (port?: number) => {
    const PORT = port || process.env.PORT || 1337;
    this.app.listen(PORT, () => {
      console.log(success + " Server is listening on port: " + PORT);
    });
  };

  initRoutes() {
    this.app.use(express.static(path.join(__dirname, "/css")));
    this.app.use("/", new Fitness(Router()).Router);
  }
}
