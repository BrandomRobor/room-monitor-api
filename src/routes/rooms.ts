import { Router } from "express"
import { middleware } from "express-paginate"
import { roomModel } from "../models/roomModel"

const roomsRoutes = Router()
roomsRoutes.use(middleware())

roomsRoutes.get("/rooms", async (req, res) => {
    const skip = req.skip as number
    const limit = parseInt(req.query.limit as string)

    res.json(await roomModel.find().skip(skip).limit(limit))
})

export default roomsRoutes