
 import express from 'express';
const router = express.Router();

// Define your routes here
router.post('/teams', (req, res) => {
  console.log("create a new team");
  const { name, description, members } = req.body;
  const newTeam = {
    id: generateUniqueId(),
    name: "",
    description: "",
    numberOfMembers: "",
  };
  teams.push(newTeam);
  res.status(204).json(newTeam);
});

router.get('/listofteams', (req, res) => {
  res.send("list of teams");
});

router.get('/singleteam', (req, res) => {
  res.send("a single team is published");
});

export default router;
//module.exports=router
