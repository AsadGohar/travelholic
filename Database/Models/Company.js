const mongoose = require ('mongoose');

const CompanySchema = mongoose.Schema({
    name: { type: String , required:true},
    email:{type:String},
    contact_num:{type:Number,required:true},
    logo_image:{type:String},
},{ timestamps: true});

const CompanyModel = mongoose.model('Company', CompanySchema);
module.exports = CompanyModel;
