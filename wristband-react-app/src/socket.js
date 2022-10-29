import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000')
// const socket = openSocket('http://brite4.ngrok.io:3030');

function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}
export { subscribeToTimer };