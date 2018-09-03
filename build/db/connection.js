"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = {
    cloud: "mongodb+srv://itweb:fitness@cluster0-nyqu6.mongodb.net/test?retryWrites=true",
    local: "mongodb://localhost:27017/Fitness"
};
const connectopnOptions = {
    useNewUrlParser: true
};
mongoose_1.default.connect(connectionString.cloud, connectopnOptions, error => {
    if (error) {
        // do something
    }
    else {
        console.log("Connected to db");
    }
});
exports.default = mongoose_1.default;
//# sourceMappingURL=connection.js.map