import express, { Application } from 'express';
require('./config/config');

export default class Server {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(express.json());
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: Function) {
    this.app.listen(this.port, callback());
  }
}
