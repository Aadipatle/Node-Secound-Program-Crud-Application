import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'
 

const app = express();
const port = 3001;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/',userRoutes)



// app.use('/createUser',userRoutes)
// app.use('/createUser',userRoutes)
// app.get('/',(req,res)=>res.send("welcome"));





app.listen(port),()=>{
  console.log(`running ${port}`);
};