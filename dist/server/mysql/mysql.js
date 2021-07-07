"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        this.cnn = mysql.createConnection({
            host: process.env.URLDB,
            user: process.env.USERDB,
            password: process.env.PASSDB,
            database: 'product_db',
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // static ejecutarQuery(query: string, callback: Function) {
    //   this.instance.cnn.query(query, (err, results: Object[], fields) => {
    //     if (err) {
    //       return callback(err);
    //     }
    //     if (results.length === 0) {
    //       callback('El registro solicitado no existe');
    //     } else {
    //       callback(null, results);
    //     }
    //   });
    // }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online!!!');
        });
    }
}
exports.default = MySQL;
//# sourceMappingURL=mysql.js.map