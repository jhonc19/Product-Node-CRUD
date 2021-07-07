import Server from './server/server';
import MySQL from './server/mysql/mysql';

const server = Server.init(parseInt(<string>process.env.PORT, 10));
server.app.use(require('./server/routes/index'));
MySQL.instance;

server.start(() => {
  console.log('Servidor corriendo en el puerto', process.env.PORT);
});
