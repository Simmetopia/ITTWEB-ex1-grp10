"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_model_1 = __importDefault(require("../db/models/exercise.model"));
class FitnessController {
    static addOneExercise(exer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newExercise = new exercise_model_1.default(exer);
                const exercise = yield newExercise.save();
                return { message: "Saved Exercise", exercise };
            }
            catch (_a) {
                return { message: "WTF!", exercise: null };
            }
        });
    }
    static getExercises() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const exerciseDocs = yield exercise_model_1.default.find();
                if (exerciseDocs) {
                    return {
                        message: "Successfully found Exercises",
                        exercises: exerciseDocs
                    };
                }
                else {
                    return {
                        message: "Did not find any Exercises",
                        exercises: []
                    };
                }
            }
            catch (_a) {
                return {
                    message: "Did not find any Exercises",
                    exercises: []
                };
            }
        });
    }
}
exports.FitnessController = FitnessController;
//# sourceMappingURL=fitnessController.js.map