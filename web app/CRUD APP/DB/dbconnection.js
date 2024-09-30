const mongoose = express('mongoose')

const dbconnect = mongoose.connect("mongodb://localhost:27017/UserDB")

dbconnect
.then(()=> console.log('DB connected'))
.catch((err) => console.log(err.message)) ;