class Room{
    constructor(roomId,roomTitle,namespaces, privateRoom = false){
        this.roomId = roomId;
        this.roomTitle = roomTitle;
        this.namespaces = namespaces;
        this.privateRoom = privateRoom;
        this.history = [];
    }

    addMessage(message){
        this.history.push(message);
    }

    clearHistory(){
        this.history = []
    }
    
}

module.exports = Room;