import { Model } from 'mongoose';
import exerciseModel, { IExerciseModel } from './models/exercise.model';
import programModel, { IProgramModel } from './models/program.model';

interface IAppSchema {
  exercises: Model<IExerciseModel>;
  programs: Model<IProgramModel>;
}

export const AppSchema: IAppSchema = {
  exercises: exerciseModel,
  programs: programModel,
};
