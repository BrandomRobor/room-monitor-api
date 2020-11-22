import { Router } from "express"
import { Error } from "mongoose"
import { roomModel } from "../models/roomModel"

const objectsRoutes = Router()

objectsRoutes.get("/objects/:id", async (req, res) => {
    const id = req.params.id as string

    try {
        const search = await roomModel.findOne({ _id: id }, { objects: 1, _id: 0 })

        if (search === null) {
            res.sendStatus(404)
        } else {
            res.json(search)
        }
    } catch (e) {
        if (e instanceof Error.CastError) {
            res.status(400).send("Invalid id")
        } else {
            res.sendStatus(500)
        }
    }
})

export default objectsRoutes