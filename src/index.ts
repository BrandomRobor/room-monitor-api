import express from "express"
import { createServer } from "http"
import roomsRoutes from "./routes/rooms"
import objectsRoutes from "./routes/objects"
import socketUpdates from "./routes/updates"

const app = express()
const http = createServer(app)

socketUpdates(http)
app.use(roomsRoutes)
app.use(objectsRoutes)

http.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})