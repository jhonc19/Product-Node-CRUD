"use strict";
// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// Puerto
process.env.PORT = process.env.PORT || '3002';
//Base de datos
let urlDB;
let userDB;
let passDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = '127.0.0.1';
    userDB = 'admin';
    passDB = '@Dm|n__|23456';
}
else {
    urlDB = process.env.MYSQL_URL;
    userDB = process.env.MYSQL_USER;
    passDB = process.env.MYSQL_PASS;
}
process.env.URLDB = urlDB;
process.env.USERDB = userDB;
process.env.PASSDB = passDB;
//# sourceMappingURL=config.js.map