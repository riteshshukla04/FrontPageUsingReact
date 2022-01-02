
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import { useContext } from "react"
import { OptionContext } from "./Components/OptionContext"
import { AiFillHeart } from "react-icons/ai";



const App=()=>{
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("RITESH");
  const [subject, setSubject] = React.useState("");
  const [roll, setRoll] = React.useState("");
  const [session,setSession] = React.useState("");
  const [classes,setClass] = React.useState("");
  const [topic,setTopic] = React.useState("");
  const [option,setOption]=useContext(OptionContext);

  const handleClickOpen = () => {
    setOpen(true);

  };


  
  const handleClose = () => {
    setOpen(false);
  };

 



  
  const Print=async()=>{
  await setOpen(false);
   window.print();
  }
  console.log(option);
  return (
    <div id="App-Print">
      <div className="LoveContainer"> 
        Made with <AiFillHeart /> with Ritesh!!  
      </div>
      <div className="ButtonContainer">

      <Button variant="outlined" onClick={handleClickOpen}>
        Change Form
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

      <FormControl component="fieldset">
            <FormLabel component="legend">Background</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={(e)=>setOption(e.target.value)}>
              <FormControlLabel value={"0"} control={<Radio />} label="Background 1" />
              <FormControlLabel value={"1"} control={<Radio />} label="Background 2" />
              
           
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Close</Button>
          {<Button onClick={()=>Print()} >Print</Button>}
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
