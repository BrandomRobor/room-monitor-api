import { Schema } from "mongoose"
import { connection } from "../helpers/connectionBuilder"

export const ObjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    iconId: String,
    status: Boolean
})

export const RoomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    location: String,
    iconId: String,
    objects: [ObjectSchema]
})

export const roomModel = connection.model("Room", RoomSchema, "rooms")