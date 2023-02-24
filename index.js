import express from 'express';
import UserRoutes from './Routes/userRoute.js'

const app = express();
const port = 8080;

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello World")
   })

   app.listen(port,()=>{
    console.log("Listening on port")
})

app.use('/users',UserRoutes)