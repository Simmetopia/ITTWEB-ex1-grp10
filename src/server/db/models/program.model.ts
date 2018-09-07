import mongoose from '../connection';
import { exerciseSchema, IExerciseModel } from './exercise.model';

const programSchema = new mongoose.Schema({
  exercises: { type: [exerciseSchema] },
  name: { type: String, required: true },
});

export interface IProgram {
  name: string;
  exercises: IExerciseModel[];
}

export interface IProgramModel extends mongoose.Document, IProgram {}

export default mongoose.model<IProgramModel>('Program', programSchema);
