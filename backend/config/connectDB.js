const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MONGODB connected `)

    }
    catch(error) {

        console.log(error)
        process.exit(1)

    }
}

module.exports = connectDB

// use this to connect to mongoDB

/*
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT , () => {
            console.log(`server running on PORT ${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

startServer()
*/