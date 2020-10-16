const {io} = require('../server');

io.on('connection', (client) => {
  console.log('usuario conectado');
  client.emit('sendMessage', {
    user: 'Admin',
    msg: 'Bienvenido a esta app'
  });

  client.on('disconnect', () => {
    console.log('usuario desconectado');
  });

  client.on('sendMessage', (data, callback) => {
    console.log(data);

    client.broadcast.emit('sendMessage', data);
    // if (data.user) {
    //   callback({
    //     resp: 'Ok'
    //   });
    // } else {
    //   callback({
    //     resp: 'Bad request'
    //   });
    // }
  });
});
