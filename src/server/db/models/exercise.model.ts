import mongoose from '../connection';

export const exerciseSchema = new mongoose.Schema({
  description: { type: String, required: true, maxlength: 1200 },
  name: { type: String, required: true },
  repetition: { type: Number, required: true },
  sets: { type: Number, required: true },
});

export interface IExercise {
  name: string;
  description: string;
  repetition: string;
  sets: number;
}

export interface IExerciseModel extends mongoose.Document, IExercise {}

export default mongoose.model<IExerciseModel>('Exercise', exerciseSchema);
