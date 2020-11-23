import { createConnection } from "mongoose"

export const connection = createConnection(
    process.env.DB_URL as string,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }
)