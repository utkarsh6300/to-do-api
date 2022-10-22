const mongoose=require('mongoose');
const db=process.env.MONGODB_URI;
const connectDB=async()=>{
try{
 await mongoose.connect(db);

 console.log('mongodb connected..');
} 
catch(err){
 console.error(err.message);

 process.exit(1);
}
};
module.exports=connectDB;