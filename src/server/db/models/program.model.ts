import mongoose from '../connection';
import { exerciseSchema, ExerciseModel } from './exercise.model';

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  exercises: { type: [exerciseSchema] },
});

export interface Program {
  name: string;
  exercises: ExerciseModel[];
}

export interface ProgramModel extends mongoose.Document, Program {}

export default mongoose.model<ProgramModel>('Program', programSchema);
