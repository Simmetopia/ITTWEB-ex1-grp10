import { Model } from "mongoose";
import exerciseModel, { ExerciseModel } from "./models/exercise.model";

interface AppSchema {
  exercises: Model<ExerciseModel>;
}

export const AppSchema: AppSchema = {
  exercises: exerciseModel
};

setTimeout(() => {
  console.log(1)
}, 0);
console.log(2)