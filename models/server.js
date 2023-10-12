const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

  constructor() {
    this.app = express()
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);

    this.paths = {};

    // Middlewares
    this.middlewares();

    // Sockets
    this.sockets();

  }

  listen() {
    this.server.listen(this.port, () => {
      console.log('Running on ', this.port);
    });
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Public directory
    this.app.use(express.static('public'));
  }

  sockets() {

    this.io.on('connection', socketController);
  }

}

module.exports = Server;