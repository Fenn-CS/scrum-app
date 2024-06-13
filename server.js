
 
import express from 'express';
import teamRouter from './routes/teams.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


/*app.get('/listofteams', (req, res) => {
  FileSystem.readfile(__dirname + "/", "userdata.json", "utf-8", (err, data) => {
    console.log(data);
    res.send(data);
  });
});*/
app.use(express.json())
app.get('/', (req,res)=>{
  console.log("yes ")
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Mount the teamRouter on the '/teams' route
app.use('/teams', teamRouter);
