import Model, { ExerciseModel, Exercise } from "../db/models/exercise.model";
import { ProgramModel, Program } from "../db/models/program.model";

export class FitnessController {

  static async addNewProgram(request: Program) {
    // ALA do some nice shit here! When you save the Program/Workout it
    // should save all the newly created exercises associated to the program/workout
    return {};
  }

  static async updateProgram(programId: string, request: Partial<Program>) {
    return {};
  }

  static async addOneExercise(request: Exercise): Promise<AddOneExerciseResponse> {
    try {
      const newExercise = new Model(request);
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
