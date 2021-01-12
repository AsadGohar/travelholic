const mongoose = require ('mongoose');

const QuestionSchema = mongoose.Schema({
    user: {type:mongoose.Schema.ObjectId, ref:'User' , required:true},
    statement:{type : String,required:true},
    description:{type : String,required:true},
    answers:[{type : mongoose.Schema.ObjectId, ref : 'Answer'}],
    reported:{type:Boolean,default:true}
},{ timestamps: true});

const QuestionModel = mongoose.model('Question', QuestionSchema);
module.exports =QuestionModel;