const mongoose = require ('mongoose');

const BookingSchema = mongoose.Schema({
   user:{type: mongoose.Schema.ObjectId, ref : 'User', required:true},
   seats:{type: Number, required:true},
   total_price:{type:Number,required:true},
   booking_confirmed:{type:Boolean,default:false}
},{ timestamps: true});

const BookingModel = mongoose.model('Booking', BookingSchema);
module.exports = BookingModel;
