const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt')
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    name: { type: String , required:true},
    email: {type:String , required: true, lowercase: true,unique: true},
    mobile_num: { type: String , required:true},
    street_address: {type: String , required:true},
    password: { type: String , required:true},
    dob : {type:Date,required:true},
    gender: { type: String , required:true},
    reported: {type:Boolean,default:true},
    city: {type: String , required:true},
    display_image_url:{type:String},
},{ timestamps: true});

UserSchema.plugin(uniqueValidator)

UserSchema.pre('save', async function (next){
    try{
        const salt =  await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(this.password, salt)
        this.password = hashedpassword
        next()
    } catch (error){
        next(error)
    }
})

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
