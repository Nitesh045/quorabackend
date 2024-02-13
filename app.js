const express= require('express')
const app=express();
const bodyParser = require('body-parser');

const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT


const conection= require('../backend/conn/server')
// cors.........................here



// routes

const cors= require('cors');
//app.use(cors());
app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use((req,res,next)=>{
    req.header('Access-Control-Allow-Origin',"*")
    req.header('Access-Control-Allow-Headers',"*")
    next();
});

// body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// path
const path = require('path')
// app.use('/uploads',express.static(path.join(__dirname,"./")));
//app.use(express.static(path.join(__dirname,"../Quora/dist")));
//app.use(express.static(path.join(process.cwd(),"Quora",'dist',)));

// app.get("/",(req,res)=>{
//     try {

//         res.sendFile(path.join(process.cwd(),"Quora",'dist','index.html'))
//     } catch (error) {
//         console.log(error);
//     }
// });

const questionRoute= require('./routes/question')

app.use(questionRoute);

const answerRoute= require('./routes/answer');
app.use(answerRoute);

app.listen(port,()=>{
    console.log(`sever start at${port}`)
})