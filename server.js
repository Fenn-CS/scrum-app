import express from 'express';
import teamRouter from './routes/teams.js';
/*import { fileURLToPath } from 'url';
import path from 'path';*/

const app = express();


app.listen(8080, ()=>{
  console.log('Server is running on port 8080');
})

app.get('/',(req, res)=>{
 console.log("send")
})

app.use("/teams", teamRouter)
 



