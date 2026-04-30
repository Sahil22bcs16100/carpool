import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({

driver:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

from:String,
to:String,
date:String,

seats:Number,
price:Number

});

export default mongoose.model("Ride",rideSchema);