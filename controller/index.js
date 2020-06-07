var userName = "Đỗ Đức Bình";
const PRIVATEPERSONALCHANEL = "private-chanel";
module.exports = async function socketIoControl(socket, io) {
    console.log('a user connected');
    socket.emit("wellCome", { message: "Chào anh em" })
    socket.on("join-chat-rom", data => {
        console.log(data)
        console.log("user" + userName + " join chat rom");
        socket.emit("join-chat-rom" + userName, { message: "success", status: true })
    })
    socket.on('send-message', (data) => {
        console.log("recived message")
        socket.emit(PRIVATEPERSONALCHANEL,{type:"message has send", data: { id: data.id}})
        socket.broadcast.emit("get-message",{sender: userName, message: data.message, id: data.id})
    })
}