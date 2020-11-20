import { Router } from "express"
import { middleware } from "express-paginate"
import { roomModel } from "../models/roomModel"

const roomsRoutes = Router()
roomsRoutes.use(middleware())

roomsRoutes.get("/rooms", async (req, res) => {
    const skip = req.skip as number
    const limit = parseInt(req.query.limit as string)

    try {
        res.json(await roomModel.find({}, { objects: 0, __v: 0 }).skip(skip).limit(limit))
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

export default roomsRoutes