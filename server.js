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



app.listen(port),()=>{
  console.log(`Our Port Running On ${port}`);
};