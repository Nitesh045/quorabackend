const {Router}=require('express');
const answerRouter=Router();
const answerController=require('../Controllers/answerCon');;
answerRouter.post('/answer',answerController.answer_post)
answerRouter.get('/answer')
module.exports=answerRouter