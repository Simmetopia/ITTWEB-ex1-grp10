"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_model_1 = __importDefault(require("./models/exercise.model"));
exports.AppSchema = {
    exercises: exercise_model_1.default
};
setTimeout(() => {
    console.log(1);
}, 0);
console.log(2);
//# sourceMappingURL=AppSchema.js.map