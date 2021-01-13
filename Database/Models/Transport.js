const mongoose = require ('mongoose');

const TransportSchema = mongoose.Schema({
    name: { type: String , required:true},
    route:{type : mongoose.Schema.ObjectId, ref : 'Route'},
    best:{type:Number,required:true},
    low_budget:{type:Number,required:true}
},{ timestamps: true});

const TansportModel = mongoose.model('Transport', TransportSchema);
module.exports = TansportModel;
