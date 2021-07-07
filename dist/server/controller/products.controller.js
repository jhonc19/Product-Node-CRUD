"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.insertProduct = exports.updateProduct = exports.getProduct = exports.getProducts = void 0;
const mysql_1 = __importDefault(require("../mysql/mysql"));
mysql_1.default.instance;
const connection = mysql_1.default.instance.cnn;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `select * from products`;
    connection.query(query, (err, rows) => {
        err && res.json(err.sqlMessage);
        rows.length > 0
            ? res.status(200).json({ success: true, data: rows })
            : res.json('Registro no encontrado');
    });
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `select * from products where id = ?`;
    connection.query(query, [req.params.id], (err, rows) => {
        err && res.json(err.sqlMessage);
        rows.length > 0
            ? res.status(200).json({ success: true, data: rows })
            : res.json('Registro no encontrado');
    });
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `delete from products where id = ?`;
    connection.query(query, [req.params.id], (err, rows) => {
        err
            ? res.json(err.sqlMessage)
            : res.status(200).json({ success: true, data: 'Registro Eliminado' });
    });
});
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    const { id, name, price, color, description } = product;
    const query = `update products set name = ?, price = ?, color = ?, description = ? where id = ?`;
    connection.query(query, [name, price, color, description, id], (err, rows) => {
        err
            ? res.json({ success: false, data: err.sqlMessage })
            : res.status(200).json({ success: true, data: product });
    });
});
exports.updateProduct = updateProduct;
const insertProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    const { name, price, color, description } = product;
    const query = `insert into products (name, price, color, description) ` +
        `values (?, ?, ?, ?)`;
    connection.query(query, [name, price, color, description], (err, rows) => {
        err
            ? res.json({ success: false, data: err.sqlMessage })
            : res.status(200).json({ success: true, data: product });
    });
});
exports.insertProduct = insertProduct;
//# sourceMappingURL=products.controller.js.map