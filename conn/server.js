const mongoose= require('mongoose');

const dbUri= process.env.MONGODBURL;
console.log(process.env.MONGODBURL);
mongoose.connect(dbUri)
.then(()=>console.log('database conenct'))
.catch((e)=>console.log(e))


// const databaseConnection = async () => {
//    try {
//     await mongoose.connect(dbUri, {
//         keepAlive: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(()=>console.log('connected'))
    
    
//    } catch (error) {
//     console.log(error)
//    }

// }
// module.exports= databaseConnection;