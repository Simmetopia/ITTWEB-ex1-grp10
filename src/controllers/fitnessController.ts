import Model, { ExerciseModel, Exercise } from "../db/models/exercise.model";

export class FitnessController {
  static async addOneExercise(exer: Exercise): Promise<AddOneExerciseResponse> {
    try {
      const newExercise = new Model(exer);
      const exercise: ExerciseModel = await newExercise.save();
      return { message: "Saved Exercise", exercise };
    } catch {
      return { message: "WTF!", exercise: null };
    }
  }

  static async getExercises(): Promise<GetExerciseResponse> {
    try {
      const exerciseDocs = await Model.find();
      if (exerciseDocs) {
        return {
          message: "Successfully found Exercises",
          exercises: exerciseDocs
        };
      } else {
        return {
          message: "Did not find any Exercises",
          exercises: []
        };
      }
    } catch {
      return {
        message: "Did not find any Exercises",
        exercises: []
      };
    }
  }
}

interface GetExerciseResponse {
  message: string;
  exercises: ExerciseModel[];
}

export interface AddOneExerciseResponse {
  message: string;
  exercise: ExerciseModel | null;
}
