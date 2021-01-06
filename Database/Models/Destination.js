const mongoose = require ('mongoose');

const DestinationSchema = mongoose.Schema({
    name: { type: String , required:true},
    route:{type : mongoose.Schema.ObjectId, ref : 'Route'},
    next:[{type : mongoose.Schema.ObjectId, ref : 'Destination'}],
},{ timestamps: true});

const DestinationModel = mongoose.model('Destination', DestinationSchema);
module.exports =DestinationModel;
