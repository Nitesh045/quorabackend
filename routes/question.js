const {Router}=require('express');
const questionRouter=Router();
const questionController=require('../Controllers/questionCon');
questionRouter.post('/question',questionController.question_post)
questionRouter.get('/question',questionController.question_get)
module.exports=questionRouter