const express = require('express');
const dotenv = require('dotenv');

const path = require('path');

// To add colors in terminal text
const colors = require('colors');

//Load env var
dotenv.config({ path: './config/config.env' });

//Coonect to database 
const connectDB = require('./config/db');
connectDB();

const app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Body parser
app.use(express.json());


//Socket Connection
const socketio = require('socket.io');
const http = require('http');


const server = http.createServer(app);
const io = socketio(server);


//Cors
const cors = require('cors');
app.use(cors());



//Load routes file
const auth = require('./routes/auth');
const join = require('./routes/join');
app.use('/api/v1/chatup/auth', auth);
app.use('/api/v1/chatup/join',join);



//Middleware error   (To use middleware it has to be in right order)
const errorHandler = require('./middleware/error');
app.use(errorHandler);




io.on('connection',(client)=>{

    console.log('We have a new connection!!!');

    client.on('join', ({ Username, roomId }, callback) => {
        
        client.join(roomId);
    
        client.emit('message', { user: 'admin', roomId: roomId, text: `${Username}, welcome to room ${roomId}.`});
        client.broadcast.to(roomId).emit('message', { user: 'admin', roomId: roomId, text: `${Username} has joined!` });
    
        //console.log(`Admin Sent info to users`);
        callback();

      });


      client.on('sendMessage', (data) => {
        const {user, message, roomId} = data;
    
        io.to(roomId).emit('message', { user: user, text: message , roomId: roomId});
        
        //console.log(`${user} === ${message} to  ${roomId}`);
        
      });


    client.on('disconnect',()=>{
        console.log('User had left!!!');
    })


});



const PORT = process.env.PORT || 5000;


const main_server = server.listen(PORT
    , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// handle unhandled promise rejection
process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error: ${err.message}`);
    // close server & exit process 
    main_server.close(() => process.exit(1));
});

