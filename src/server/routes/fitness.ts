import { Request, Response, Router } from 'express';

import { FitnessController } from '../controllers/fitnessController';

export class Fitness {
  constructor(private router: Router) {
    this.initRoutes();
  }

  public get Router() {
    return this.router;
  }

  private mainView = async (request: Request, response: Response) => {
    const { exercises } = await FitnessController.getExercises();
    response.render('content', { name: 'Yeah boi', fitnessItems: exercises });
  };

  private submit = async (request: any, response: Response) => {
    try {
      const addExercise = await FitnessController.addOneExercise(request.body);

      response.status(200).json(addExercise.message);
    } catch (error) {
      response.status(404).json({ message: 'could not save' });
    }
  };

  private initRoutes() {
    this.router.post('/submit', this.submit);
    this.router.use('/', this.mainView);
  }
}
