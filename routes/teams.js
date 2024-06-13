
import express from 'express';
const router = express.Router();
import data from '../userdata.json' assert { type: 'json' };

//import fs from 'fs';

const generateUniqueId = () => {
  return 64465;
}

// Define your routes here
router.post('/teams', (req, res) => {
  console.log("create a new team");
  //Hardcode the team data 
  console.log(req.body)
  const { name, description, members } = req.body;
  const newTeam = {
    name,
    description,
    members,
  };
  data.push(newTeam);
  res.status(201).json(newTeam);
});

router.get('/listofteams', (req, res) => {
  res.send(data);
});

// Define your routes here
router.get('/teams', (req, res) => {
  res.json(data);
});

router.get('/singleteam', (req, res) => {
  res.send("a single team is published");
});

// GET /api/teams/:id - Retrieve a single team by ID
router.get('/teams/:id', (req, res) => {
  console.log("get a single team");
  const teamId = parseInt(req.params.id);
  const team = teams.find(t => t.id === teamId);

  if (team) {
    res.status(200).json(team);
  } else {
    res.status(404).json({ error: 'Team not found' });
  }
});

export default router;
//module.exports=router"
