const express = require('express');
const app=express()
const port = process.env.PORT||5001;
const userRouter=require('./routes/v1/user.route')

// middleware
app.use(express.json())

//apis
app.use('/api/v1/user',userRouter)
//default route
app.all('*',(req,res)=>{
    res.send('Invalid route!!!')
})
//home route
app.get('/',(req,res)=>{
    res.send('Server is running.')
})
app.listen(port,()=>{
    console.log('server is running from: ',port)
})
