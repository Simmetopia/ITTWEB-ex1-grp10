import { Schema, Document } from 'mongoose';
import mongoose from '../connection';
import { exerciseSchema, ExerciseModel } from './exercise.model';

const programSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String},
  exercises: { type: [exerciseSchema]}
});

export interface Program {
  name: string;
  description: String,
  exercises: ExerciseModel[];
}

export interface ProgramModel extends Document, Program {}

export default mongoose.model<ProgramModel>('Program', programSchema);
