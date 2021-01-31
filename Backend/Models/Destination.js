const mongoose = require ('mongoose');

const DestinationSchema = mongoose.Schema({
    title: { type: String , required:true},
    route:{type : mongoose.Schema.ObjectId, ref : 'Route'},
    rating:{type: Number,required:true},
    introduction:{type:String,required:true},
    photos:[{type:String}],
    guidelines:{type:String,required:true},
    history:{type:String,required:true},
    is_trip_planner:{type:Boolean,required:true},

    next:[{type : mongoose.Schema.ObjectId, ref : 'Destination'}],
},{ timestamps: true});

const DestinationModel = mongoose.model('Destination', DestinationSchema);
module.exports =DestinationModel;
