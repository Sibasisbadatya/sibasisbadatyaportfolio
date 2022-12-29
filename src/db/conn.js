

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const MONGO_URI="mongodb+srv://sibasis:iNEyBvsvWXZ0BZwI@cluster0.eptzsb1.mongodb.net/"
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to mongodb");
}).catch((e)=>{
    console.log("not connected");
})
// mongodb://localhost:27017/sibasis
