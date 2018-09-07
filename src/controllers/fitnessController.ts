import exerciseModel, { ExerciseModel, Exercise } from "../db/models/exercise.model";
import programModel, { ProgramModel, Program } from "../db/models/program.model";
import { StringLiteral } from "babel-types";

export class FitnessController {

  static async addNewProgram(request: Program) : Promise<AddNewProgramResponse> {
    // ALA do some nice shit here! When you save the Program/Workout it
    // should save all the newly created exercises associated to the program/workout
    
    try{
      const newProgram = new programModel(request);
      const program: ProgramModel = await newProgram.save();
      console.log(program)
      return{ message: "Saved Program", program};
    }catch{    
      return{ message: "Error", program: null };
    }

  }

  static async updateProgram(programId: string, request: ExerciseModel) {
    const program = await programModel.findById(programId);
    if (program){
      program.exercises.push(request);
      program.save();
    }
    console.log(programId);
    return program;
  }

  static async getOneProgram(id: string){
    return programModel.findById(id).exec();
  }

  static async getPrograms(): Promise<GetProgramResponse> {
    try {
      const workoutDocs = await programModel.find();
      if (workoutDocs) {
        return {
          message: "Successfully found Programs",
          programs: workoutDocs
        };
      } else {
        return {
          message: "Did not find any Programs",
          programs: []
        };
      }
    } catch {
      return {
        message: "Did not find any Programs",
        programs: []
      };
    }
  }

  static async addOneExercise(request: Exercise): Promise<AddOneExerciseResponse> {
    try {
      const newExercise = new exerciseModel(request);
      const exercise: ExerciseModel = await newExercise.save();
      return { message: "Saved Exercise", exercise };
    } catch {
      return { message: "WTF!", exercise: null };
    }
  }

  static async getExercises(): Promise<GetExerciseResponse> {
    try {
      const exerciseDocs = await exerciseModel.find();
      if (exerciseDocs) {
        return {
          message: "Successfully found Exercises",
          exercises: exerciseDocs
        };
      } else {
        return {
          message: "Did not find any Exercises",
          exercises: []
        };
      }
    } catch {
      return {
        message: "Did not find any Exercises",
        exercises: []
      };
    }
  }
}

interface GetProgramResponse {
  message: string;
  programs: ProgramModel[];
}

interface GetExerciseResponse {
  message: string;
  exercises: ExerciseModel[];
}

export interface AddNewProgramResponse{
  message: string;
  program: ProgramModel | null;
}

export interface AddOneExerciseResponse {
  message: string;
  exercise: ExerciseModel | null;
}
