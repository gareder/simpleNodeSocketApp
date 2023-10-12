
const socketController = (socket) => {

  console.log('Connected ', socket.id);

  socket.on('disconnect', () => {
    console.log('Disconnected: ', socket.id);
  });

  socket.on('sendmsg', (payload, callback) => {
    const id = 123456789;
    callback({ id, date: new Date().getTime() });
    socket.broadcast.emit('sendmsg', payload);
  });

}

module.exports = {
  socketController
}