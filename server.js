const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Um cliente se conectou');

  socket.on('chat message', (message) => {
    console.log('Mensagem recebida:', message);

    // Adicione um campo 'timestamp' ao objeto de mensagem
    message.timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Emita a mensagem modificada
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou');
  });
});

app.get('/', (req, res) => {
  res.send('Servidor Socket.io está funcionando');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor Socket.io está ouvindo na porta ${PORT}`);
});
