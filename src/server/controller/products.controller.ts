import { Response, Request } from 'express';
import MySQL from '../mysql/mysql';

MySQL.instance;
const connection = MySQL.instance.cnn;

interface Product {
  id: string;
  name: string;
  color: string;
  price: string;
  description: string;
}

const getProducts = async (req: Request, res: Response) => {
  const query = `select * from products`;

  connection.query(query, (err, rows) => {
    err && res.json(err.sqlMessage);

    rows.length > 0
      ? res.status(200).json({ success: true, data: rows })
      : res.json('Registro no encontrado');
  });
};

const getProduct = async (req: Request, res: Response) => {
  const query = `select * from products where id = ?`;

  connection.query(query, [req.params.id], (err, rows) => {
    err && res.json(err.sqlMessage);

    rows.length > 0
      ? res.status(200).json({ success: true, data: rows })
      : res.json('Registro no encontrado');
  });
};

const deleteProduct = async (req: Request, res: Response) => {
  const query = `delete from products where id = ?`;

  connection.query(query, [req.params.id], (err, rows) => {
    err
      ? res.json(err.sqlMessage)
      : res.status(200).json({ success: true, data: 'Registro Eliminado' });
  });
};

const updateProduct = async (req: Request, res: Response) => {
  const product: Product = req.body;
  const { id, name, price, color, description } = product;

  const query = `update products set name = ?, price = ?, color = ?, description = ? where id = ?`;

  connection.query(
    query,
    [name, price, color, description, id],
    (err, rows) => {
      err
        ? res.json({ success: false, data: err.sqlMessage })
        : res.status(200).json({ success: true, data: product });
    }
  );
};

const insertProduct = async (req: Request, res: Response) => {
  const product: Product = req.body;
  const { name, price, color, description } = product;

  const query =
    `insert into products (name, price, color, description) ` +
    `values (?, ?, ?, ?)`;

  connection.query(query, [name, price, color, description], (err, rows) => {
    err
      ? res.json({ success: false, data: err.sqlMessage })
      : res.status(200).json({ success: true, data: product });
  });
};

export { getProducts, getProduct, updateProduct, insertProduct, deleteProduct };
