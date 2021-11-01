import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading/Heading';
import Logo from './Components/School Logo/Logo';
import Topic from './Components/Topic/topic';
import Intro from './Components/NAME/intro';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const App=()=>{
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [roll, setRoll] = React.useState("");
  const [session,setSession] = React.useState("");
  const [classes,setClass] = React.useState("");
  const [topic,setTopic] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="ButtonContainer">
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      </div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter your Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
          
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />


          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Roll"
            type="text"
            fullWidth
            variant="standard"
            value={roll}
            onChange={e => setRoll(e.target.value)}
          />

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Class"
            type="text"
            fullWidth
            variant="standard"
            value={classes}
            onChange={e => setClass(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Session"
            type="text"
            fullWidth
            variant="standard"
            value={session}
            onChange={e => setSession(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Topic"
            type="text"
            fullWidth
            variant="standard"
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <Heading  name={subject}/>
      <Logo/>
      <Topic topic={topic}/>
      <Intro name={name} roll={roll} classes={classes} session={session}/>
    </div>
  );
}

export default App;
