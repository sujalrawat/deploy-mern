import mongoose from "mongoose"

mongoose.connect("mongodb+srv://sonu:sonu@cluster0.bbmub.mongodb.net/login?retryWrites=true&w=majority&appName=Cluster0")

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
