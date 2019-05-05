const express = require("express")
const http = require('http')
const app = express()

const socketIO  =  require("socket.io")
const port = process.env.PORT || 3001
const server = http.createServer(app)

const io = socketIO(server)

io.on("connection", socket =>{
    console.log("New client connected" + socket.id)
    socket.on("send", (data)=>{
    io.sockets.emit("anhyeuem", data);
       

    })
    // socket.on("initial_data", () =>{
    //     io.sockets.emit("get_data");
    // })
})


server.listen(port, () => console.log(`Listening on port ${port}`));