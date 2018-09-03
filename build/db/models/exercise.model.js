"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connection_1 = __importDefault(require("../connection"));
const exerciseSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxlength: 1200 },
    repetition: { type: String, required: true }
});
exports.default = connection_1.default.model("Exercise", exerciseSchema);
//# sourceMappingURL=exercise.model.js.map