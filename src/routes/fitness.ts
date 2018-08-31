import { Router, Request, Response } from "express";
import { data } from "../ts/formSubmit";

export class Fitness {
  constructor(private router: Router) {
    this.initRoutes();
  }

  public get Router() {
    return this.router;
  }

  mainView(request: Request, response: Response) {
    response.render("content", { name: "Yeah boi", fitnessItems: data });
  }

  submit(request: Request, response: Response) {
    console.log(request.body);
    response.status(200).json(request.body);
  }

  initRoutes() {
    this.router.use("/submit", this.submit);
    this.router.use("/", this.mainView);
  }
}
