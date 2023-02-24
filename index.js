import express from 'express';
import userRoutes from './Routes/userRoute.js'
import bodyParser from 'body-parser';

const app = express();

const port = 8000;

app.use(express.json())
app.use(bodyParser.json());
app.use('/users',userRoutes)

app.get('/',(req,res)=>{
    res.send("Hello World")
   })

   app.listen(port,()=>{
    console.log("Listening on port")
})

