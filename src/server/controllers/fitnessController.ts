import { AppSchema } from '../db/AppSchema';
import Model, { Exercise, ExerciseModel } from '../db/models/exercise.model';
import { Program } from '../db/models/program.model';

export class FitnessController {
  public static async addNewProgram(request: Program) {
    try {
      return AppSchema.programs.create(request);
    } catch (error) {
      throw error;
    }
  }

  public static async updateProgram(programId: string, request: Partial<Program>) {
    try {
      return AppSchema.programs.findByIdAndUpdate(programId, request).exec();
    } catch (error) {
      throw error;
    }
  }

  public static async addOneExercise(request: Exercise): Promise<AddOneExerciseResponse> {
    try {
      const newExercise = new Model(request);
      const exercise: ExerciseModel = await newExercise.save();
      return { message: 'Saved Exercise', exercise };
    } catch {
      return { message: 'WTF!', exercise: null };
    }
  }

  public static async getExercises(): Promise<GetExerciseResponse> {
    try {
      const exerciseDocs = await Model.find();
      if (exerciseDocs) {
        return {
          exercises: exerciseDocs,
          message: 'Successfully found Exercises',
        };
      } else {
        return {
          exercises: [],
          message: 'Did not find any Exercises',
        };
      }
    } catch {
      return {
        exercises: [],
        message: 'Did not find any Exercises',
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
