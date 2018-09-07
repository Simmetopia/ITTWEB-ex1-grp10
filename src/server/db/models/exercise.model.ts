import mongoose from '../connection';

export const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxlength: 1200 },
  repetition: { type: Number, required: true },
  sets: { type: Number, required: true },
});

export interface Exercise {
  name: string;
  description: string;
  repetition: string;
  sets: number;
}

export interface ExerciseModel extends mongoose.Document, Exercise {}

export default mongoose.model<ExerciseModel>('Exercise', exerciseSchema);
