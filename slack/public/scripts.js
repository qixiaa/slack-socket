const socket = io('http://localhost:8000');

socket.on('nsList',(nsData) => {
    console.log(nsData);
})