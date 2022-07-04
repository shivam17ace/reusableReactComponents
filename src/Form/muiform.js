import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import "./form.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overlay: {zIndex: 5}  
  };

  function ChildModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Button onClick={handleOpen}>Open Inner Modal</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in inner modal</h2>
            <p id="child-modal-description">
               Inner Modal Content
            </p>
            <Button onClick={handleClose}>Close Inner Modal</Button>
          </Box>
        </Modal>
      </>
    );
  }

function MuiForm() {
    const [formData, setFormData] = useState('');
    const [display, setDisplay] = useState(false)
    const [inputName,setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [gender, setGender] = useState('');
    const [hobby, setHobby] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = [];
        data.push(inputName,inputAge,gender,hobby)
        setFormData(data)
        setDisplay(true)
    }

    const handleInputChange = (e) => {
        if(e.target.name === "name") {
            setInputName(e.target.value);
          } else if(e.target.name === "age") {
            setInputAge(e.target.value);
          } else if(e.target.name === "gender") {
            setGender(e.target.value);
          } else {
            setHobby(e.target.value);
          }
    }

    const handleShowData = () => {
        const toggle = display ? false : true;
        setDisplay(toggle)
    }

    // const showModal = () => {
    //     <Modal1 />
    // }
    
    // const toggleModal = () => {
    //     isModalOpen === false ? setIsModalOpen(true) : setIsModalOpen(false);
    // }

    return(
        <div className="container">
            <h2 className="header">Form Using MaterialUi</h2>
            <form>
             <Grid container alignItems="center" justify="center" direction="column">
                <div className="inputs">
                    <Grid item className="input1">
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item className="input2">
                        <TextField
                            id="age-input"
                            name="age"
                            label="Age"
                            type="number"
                            value={formData.age}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </div>
                <Grid item className="radio">
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                            <RadioGroup
                            name="gender"
                            onChange={handleInputChange}
                            row
                            >
                                <FormControlLabel
                                    key="male"
                                    value="male"
                                    control={<Radio size="small" />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    key="female"
                                    value="female"
                                    control={<Radio size="small" />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    key="other"
                                    value="other"
                                    control={<Radio size="small" />}
                                    label="Other"
                                />
                            </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                    <FormLabel>Hobby</FormLabel>
                        <Select
                        name="hobby"
                        onChange={handleInputChange}
                        className="select"
                        value=''
                        >
                        <MenuItem key="mac" value="sports">
                            Sports
                        </MenuItem>
                        <MenuItem key="windows" value="study">
                            Study
                        </MenuItem>
                        <MenuItem key="linux " value="music">
                            Music
                        </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
             </Grid>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                    Submit
                    {console.log(formData)}
                </Button>
                <Button variant="contained" color="secondary" onClick={handleShowData}>Show Submitted Data</Button>
        </form>
            {
                display ? formData : null
            }
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                >
                    <motion.div
                    animate={{
                        y: [100,100,0,0],
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                      }}>
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Text in a modal</h2>
                        <p id="parent-modal-description">
                            Modal Content
                        </p>
                        <ChildModal />
                    </Box>
                    </motion.div>
                </Modal>
            </div>
        </div>
    )
}
export default MuiForm;