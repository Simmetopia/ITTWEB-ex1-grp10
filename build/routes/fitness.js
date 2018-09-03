"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fitnessController_1 = require("../controllers/fitnessController");
class Fitness {
    constructor(router) {
        this.router = router;
        this.mainView = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { exercises } = yield fitnessController_1.FitnessController.getExercises();
            response.render("content", { name: "Yeah boi", fitnessItems: exercises });
        });
        this.submit = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const addExercise = yield fitnessController_1.FitnessController.addOneExercise(request.body);
                response.status(200).json(addExercise.message);
            }
            catch (error) {
                response.status(404).json({ message: "could not save" });
            }
        });
        this.initRoutes();
    }
    get Router() {
        return this.router;
    }
    initRoutes() {
        this.router.post("/submit", this.submit);
        this.router.use("/", this.mainView);
    }
}
exports.Fitness = Fitness;
//# sourceMappingURL=fitness.js.map