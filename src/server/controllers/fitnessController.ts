import { AppSchema } from '../db/AppSchema';
import exerciseModel, { IExercise, IExerciseModel } from '../db/models/exercise.model';
import { IProgram } from '../db/models/program.model';

export class FitnessController {
  public static async addNewProgram(request: IProgram) {
    try {
      return AppSchema.programs.create(request);
    } catch (error) {
      throw error;
    }
  }

  public static async updateProgram(programId: string, request: Partial<IProgram>) {
    try {
      return AppSchema.programs.findByIdAndUpdate(programId, request).exec();
    } catch (error) {
      throw error;
    }
  }

  public static async addOneExercise(request: IExercise): Promise<IAddOneExerciseResponse> {
    try {
      const newExercise = new exerciseModel(request);
      const exercise: IExerciseModel = await newExercise.save();
      return { message: 'Saved Exercise', exercise };
    } catch {
      return { message: 'WTF!', exercise: null };
    }
  }

  public static async getExercises(): Promise<IGetExerciseResponse> {
    try {
      const exerciseDocs = await exerciseModel.find();
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

interface IGetExerciseResponse {
  message: string;
  exercises: IExerciseModel[];
}

export interface IAddOneExerciseResponse {
  message: string;
  exercise: IExerciseModel | null;
}
