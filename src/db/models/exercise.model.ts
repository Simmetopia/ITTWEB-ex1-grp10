import { Schema, Document } from "mongoose";
import mongoose from "../connection";

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxlength: 1200 },
  repetition: { type: String, required: true }
});

export interface Exercise {
  name: string;
  description: string;
  repetition: string;
}

export interface ExerciseModel extends Document, Exercise {}

export default mongoose.model<ExerciseModel>("Exercise", exerciseSchema);
