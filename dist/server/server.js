"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('./config/config');
class Server {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.app.use(express_1.default.json());
    }
    static init(port) {
        return new Server(port);
    }
    start(callback) {
        this.app.listen(this.port, callback());
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map