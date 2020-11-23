import { Server } from "http"
import socketIO from "socket.io"
import { roomModel } from "../models/roomModel"

export default (http: Server) => {
    const io = socketIO(http)

    io.on("connection", (socket) => {
        socket.on("joinUpdates", (id) => {
            console.log(`ID received: ${id}`)
            socket.join(id)
        })

        socket.on("arduinoUpdate", (updateInfo) => {
            console.log(JSON.stringify(updateInfo))
            roomModel.findOneAndUpdate({
                _id: updateInfo.id,
                objects: { $elemMatch: {
                    _id: updateInfo.objectInfo.id
                }}
            }, {
                $set: {
                    "objects.$.status": updateInfo.objectInfo.status
                }
            }).exec()
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