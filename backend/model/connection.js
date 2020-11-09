const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://kiranpoojary:kiran123@projectcluster.rmirs.mongodb.net/todo?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    //mongodb+srv://kiranpoojary:kiran123@projectcluster.rmirs.mongodb.net/todo?retryWrites=true&w=majority
    //mongodb://localhost:27017/Todo
    if (!err) {
        console.log("Mongodb Connection Established");
    } else {
        console.log("MongoDB connection failed");
    }
})

const connection = mongoose.connection
