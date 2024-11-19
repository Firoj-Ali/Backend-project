import { app } from "./app.js"
import { connectDB } from "./db/index.js"
import dotenv from "dotenv"


dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.on(error, (error) => {
            console.log("app error", error)
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on : ${process.env.PORT}`)
        })
    }).catch((error) => {
        console.log("MONGO db connection error !!!" , error)
    })
