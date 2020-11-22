import express from "express"
import roomsRoutes from "./routes/rooms"
import objectsRoutes from "./routes/objects"

const app = express()

app.use(roomsRoutes)
app.use(objectsRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})