const express= require('express');
const router= express.Router();
const answerSchema= require('../models/answerSchema');
const ansRoute=require('../routes/answer');

module.exports.answer_post=async(req,res)=>{
    try {
        await answerSchema.create({
            answerName:req.body.answerName,
            questionId:req.body.questionId,
            user:req.body.user,
            
        }).then(()=>{
            res.status(201).send({
                status:true,
                message:"answer add succesfully"
            })
        }).catch((e)=>{
            res.status(400).send({
                status:false,
                message:"bad request"
            });
        });
    } catch (error) {
        res.status(500).send({
            status:false,
            message:"internal error"
        })
    }
}