import { Server } from "http"
import socketIO from "socket.io"

export default (http: Server) => {
    const io = socketIO(http)

    io.on("connection", (socket) => {
        socket.on("joinUpdates", (id) => {
            console.log(`ID received: ${id}`)
            socket.join(id)
        })

        socket.on("arduinoUpdate", (updateInfo) => {
            console.log(JSON.stringify(updateInfo))
            io.to(updateInfo.id).emit("objectUpdate", updateInfo.objectInfo)
            /**
             * updateInfo = {
             *  id: room id,
             *  objectInfo: {
             *   id: Object id
             *   status: New status
             *  }
             * }
             */
        })
    })
}