require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json({extended:true}))

const authRouter = require('./router/auth.router');
app.use('/api', authRouter);

const eventsRouter = require('./router/getEvents');
app.use('/api/events', eventsRouter);

async function start (){
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        app.listen(PORT,()=>console.log(`Connect to port ${PORT}`))
    }catch (e){
        console.log('Error server'+e)
    }
}

start();