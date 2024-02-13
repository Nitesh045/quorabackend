const express= require('express');
const router= express.Router();
const questionSchema= require('../models/questionSchema');
const questionRoute=require('../routes/question')



module.exports.question_get= async(req,res)=>{
  try {
    await questionSchema.aggregate([
        {
            $lookup:{
                from:"answers",//collection join schema
                localField:"_id",
                foreignField:"questionId",
                as:"allAnswers" //output array field

            }
        }
    ]).exec().then((doc)=>{
        res.status(200).send(doc);
    }).catch((e)=>{
        res.status(500).send({
            status:false,
            message:"unbale to get question details"
        });
    });
  } catch (error) {
    res.status(400).send({
        status:false,
        message:"unexpected error"
    })
  }
}
// question post
module.exports.question_post= async(req,res)=>{
    console.log(req.body)
    try {
        await questionSchema.create({
            questionName:req.body.questionName,
            questionUrl:req.body.questionUrl,
            user:req.body.user,
        }).then(()=>{
            res.status(201).send({
                status:true,
                message:"question add seccessfully"
            });
        }).catch(()=>{
            res.status(400).send({
                status:false,
                message:"bad request"
            });
        });
    } catch (error) {
        console.log(error)
    }
}
