import express from "express"
import roomsRoutes from "./routes/rooms"

const app = express()

app.use(roomsRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})