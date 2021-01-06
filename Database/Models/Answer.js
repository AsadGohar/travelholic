const mongoose = require ('mongoose');

const AnswerSchema = mongoose.Schema({
    user: {type:mongoose.Schema.ObjectId, ref:'User', required:true},
    text:{type:String,required:true},
    reported:{type:Boolean,default:true}
},{ timestamps: true});

const AnswerModel = mongoose.model('Answer', AnswerSchema);
module.exports = AnswerModel;
