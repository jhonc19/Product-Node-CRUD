"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const mysql_1 = __importDefault(require("./server/mysql/mysql"));
const server = server_1.default.init(parseInt(process.env.PORT, 10));
server.app.use(require('./server/routes/index'));
mysql_1.default.instance;
server.start(() => {
    console.log('Servidor corriendo en el puerto', process.env.PORT);
});
//# sourceMappingURL=index.js.map