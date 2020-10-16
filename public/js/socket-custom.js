const socket = io();
socket.on('connect', function (){
  console.log('conectado con el servidor');

});

socket.on('disconnect', function (){
  console.log('perdimos conexion con el servidor');
});

socket.emit('sendMessage', {
  user: 'Tahirih',
  msg: 'Hola mundo'
}, function (resp){
  console.log(resp);
});

socket.on('sendMessage', function (data){
  console.log(data);
});
