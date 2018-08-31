import { Router, Request, Response } from "express";
import { data } from "../ts/formSubmit";
import exerciseController from '../controllers/fitnessController';
import { ExerciseModel } from "../db/models/exercise.model";

export class Fitness {
  constructor(private router: Router) {
    this.initRoutes();
  }

  public get Router() {
    return this.router;
  }

  mainView = async (request: Request, response: Response) => {
    const {exercises} = await  exerciseController.getExercises();
    response.render("mainView", { name: "Yeah boi", fitnessItems: exercises });
  }

  submit(request: any, response: Response) {
    exerciseController.addOneExercise(request.body)
      .then(res => {
      if (res) {
        response.status(200).json(res.message);
      } else {
        response.status(404).json({message: "could not save"});
      }
    })
  }

  initRoutes() {
    this.router.post("/submit", this.submit);
    this.router.use("/", this.mainView);
  }
}
