const mongoose= require('mongoose');
const answerSchema= new mongoose.Schema({
    answerName:{
        type:String
    },
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Questions'
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    user:Object,
   
});
module.exports= mongoose.model('Answers',answerSchema);