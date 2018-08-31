import { Router, Request, Response } from "express";
import { data } from "../ts/formSubmit";
import { ExerciseModel } from "../db/models/exercise.model";
import { FitnessController } from "../controllers/fitnessController";

export class Fitness {
  constructor(private router: Router) {
    this.initRoutes();
  }

  public get Router() {
    return this.router;
  }

  mainView = async (request: Request, response: Response) => {
    const { exercises } = await FitnessController.getExercises();
    response.render("content", { name: "Yeah boi", fitnessItems: exercises });
  };

  submit = async (request: any, response: Response) => {
    try {
      const addExercise = await FitnessController.addOneExercise(request.body);

      response.status(200).json(addExercise.message);
    } catch (error) {
      response.status(404).json({ message: "could not save" });
    }
  };

  initRoutes() {
    this.router.post("/submit", this.submit);
    this.router.use("/", this.mainView);
  }
}
