"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const force_ssl_heroku_1 = __importDefault(require("force-ssl-heroku"));
const path_1 = __importDefault(require("path"));
const log_symbols_1 = require("log-symbols");
const fitness_1 = require("./routes/fitness");
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor(app) {
        this.app = app;
        this.startServer = (port) => {
            const PORT = port || process.env.PORT || 1337;
            this.app.listen(PORT, () => {
                console.log(log_symbols_1.success + " Server is listening on port: " + PORT);
            });
        };
        this.app.use(force_ssl_heroku_1.default);
        this.setup();
        this.initRoutes();
    }
    setup() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.set("scripts", "./src/ts");
        this.app.set("views", "./src/views");
        this.app.set("view engine", "pug");
    }
    initRoutes() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "/css")));
        this.app.use("/", new fitness_1.Fitness(express_1.Router()).Router);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map