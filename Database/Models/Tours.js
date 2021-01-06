const mongoose = require ('mongoose');

const TourSchema = mongoose.Schema({
    name: { type: String , required:true},
    price: {type:Number , required: true},
    description: { type: String , required:true},
    street_address: {type: String , required:true},
    display_image:{type:String,required:true},
    reviews:[{type : mongoose.Schema.ObjectId, ref : 'Reviews'}],
    company:{type : mongoose.Schema.ObjectId, ref : 'Company'}

},{ timestamps: true});

const TourModel = mongoose.model('Tour', TourSchema);
module.exports = TourModel;
