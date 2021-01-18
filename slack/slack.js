const express = require('express')
const app = express();
app.use(express.static(__dirname + '/public'));

const socketio = require('socket.io');
const expressServer = app.listen(8000);
const io = socketio(expressServer);
console.log("Express and socket io are listening on port 8000");

let namespaces = require('./data/namespaces');
io.on('connection', (socket)=>{
   let nsData = namespaces.map((ns)=> {
       return {
           img: ns.img,
           endpoint: ns.endpoint
       }
   })
   
    socket.emit('nsList',nsData);
})


