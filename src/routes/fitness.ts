import { Router, Request, Response } from "express";
import { FitnessController } from "../controllers/fitnessController";
import { program } from "babel-types";

export class Fitness {
  constructor(private router: Router) {
    this.initRoutes();
  }

  public get Router() {
    return this.router;
  }

  mainView = async (request: Request, response: Response) => {
   
    const program = await FitnessController.getOneProgram(request.params.id);

    response.render("exercises", { name: "Yeah boi", fitnessItems: program});
  };

  submit = async (request: Request, response: Response) => {
    console.log(request.params);
    try {
      const addExercise = await FitnessController.updateProgram(request.params.id , request.body);
      response.status(200).json(addExercise);
    } catch (error) {
      response.status(404).json({ message: "could not save" });
    }
  };

  new = async (request: Request, response: Response) =>{
    
    const { message, program }  = await FitnessController.addNewProgram(request.body);
    response.render("exercises", { name: "Wwworkout", workoutItems: program});
  }

  workouts = async (request: Request, response: Response) =>{
    const { programs } = await FitnessController.getPrograms();
    response.render("workouts", { name: "Wwworkout", workoutItems: programs});
  }

  initRoutes() {
    this.router.post("/workout/:id", this.submit);
    this.router.post("/new", this.new);
    this.router.get("/workout/:id", this.mainView);    
    this.router.use("/", this.workouts);
  }
}
