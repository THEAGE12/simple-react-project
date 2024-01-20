const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/CustomerData")
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.error(err);
})

const newSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    aadhaar:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    id:{
        type: String,
        required: true,
    },
});

const collection = mongoose.model("CustomerDetails",newSchema)

module.exports=collection