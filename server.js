const express=require("express");
const connectDB=require('./config/db');
const app=express();
//connect database
connectDB();

// init middleware
app.use(express.json());

app.get('/',(req,res)=>{
 res.send('API RUNNING');
})


app.use('/api/registeruser',require('./routes/api/registeruser'));
app.use('/api/login',require('./routes/api/login'));
app.use('/api/forgetusername',require('./routes/api/forgetusername'));


const PORT=5000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});
