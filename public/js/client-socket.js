// HTML Reference
const onlineLbl = document.querySelector('#onlineLbl');
const offlineLbl = document.querySelector('#offlineLbl');
const txtMsg = document.querySelector('#txtMsg');
const btnMsg = document.querySelector('#btnMsg');

const socket = io();

socket.on('connect', () => {

  onlineLbl.style.display = '';
  offlineLbl.style.display = 'none';

});

socket.on('disconnect', () => {

  onlineLbl.style.display = 'none';
  offlineLbl.style.display = '';

});

socket.on('sendmsg', (payload) => {

  console.log(payload);

});

btnMsg.addEventListener('click', () => {
  const message = txtMsg.value;
  const payload = {
    message,
    id: '123ABC',
    date: new Date().getDate()
  }
  socket.emit('sendmsg', payload, (id) => {
    console.log('From backend', id);
  });
})