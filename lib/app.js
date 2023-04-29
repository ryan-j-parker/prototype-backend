const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

// set up the server
// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write('<h1>Hello server, my old friend...</h1>');
//     res.end();
//   } else {
//     res.writeHead(404, { 'content-type': 'text/plain' });
//     res.write('<h1>These are not the droids you&apos;re looking for</h1>');
//     res.end();
//   }
// });

// Built in middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

// App routes
app.use('/api/v1/players', require('./controllers/players'));
// app.use('/api/v1/rooms', require('./controllers/rooms'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

// setting up server
// const server = app.listen(3000, () => {
//   console.log('listening on *:3000');
// });

// socket.io init
// const io = require('socket.io')(server, {
//   cors: {
//     origin: '*',
//   },
// });

// const http = require('http').createServer(app);
// const io = require('socket.io')(http, {
//     cors: {
//     origin: '*',
//   },
// });

// framework for socket.io
// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//     io.emit('user disconnected');
//   });
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });
// http.listen(3000, () => {
//   console.log('listening on *:3000');
// });
// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });
module.exports = app;
