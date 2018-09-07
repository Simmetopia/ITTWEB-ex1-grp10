import { Model } from 'mongoose';
import exerciseModel, { ExerciseModel } from './models/exercise.model';
import programModel, { ProgramModel } from './models/program.model';

interface AppSchema {
  exercises: Model<ExerciseModel>;
  programs: Model<ProgramModel>;
}

export const AppSchema: AppSchema = {
  exercises: exerciseModel,
  programs: programModel,
};
