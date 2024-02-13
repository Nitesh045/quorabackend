const mongoose= require('mongoose');

const questionSchema= new mongoose.Schema({
    questionName:{
        type:String,
    },
    questionUrl:{
        type:String
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    answer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Answers'
    },
    user:Object,


});
module.exports=mongoose.model('Questions',questionSchema);