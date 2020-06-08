var userName = "";
const PRIVATEPERSONALCHANEL = "join-success";
const GETNEWSMESSAGE = "get-new-message";
const SENDINGMESSAGESUCESS = "sending-success";

module.exports = async function socketIoControl(socket, io) {
    console.log('a user connected');
    socket.emit("wellCome", { message: "Chào anh em" })
    socket.on("join-chat-rom", data => {
        userName = data.userName;
        console.log(data)
        socket.emit(PRIVATEPERSONALCHANEL, { status: true })
    })
    socket.on('send-message', (data) => {
        console.log("recived message")
        socket.emit(PRIVATEPERSONALCHANEL, { id: data.id })
        socket.broadcast.emit(GETNEWSMESSAGE, { sender: userName, message: data.message, id: data.id })
    })
}