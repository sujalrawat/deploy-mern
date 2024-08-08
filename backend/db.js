import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection

db.on('connected',() => {
    console.log("MongoDB connected Successfully")
})
db.on('disconnected',() => {
    console.log("Disconnected mongoDB")
})
db.on('error',() => {
    console.log("Failed to connect mongoDB")
})

export default db;