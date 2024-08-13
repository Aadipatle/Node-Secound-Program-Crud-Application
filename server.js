import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'
 

const app = express();
const port = 5001;




app.listen(port),()=>{
  console.log(`Our Port Running On ${port}`);
};