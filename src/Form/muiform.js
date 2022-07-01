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

function MuiForm() {
    const initialValues = {
        name: "",
        age: 18,
        gender: "",
        hobby:'',
    }
    const [formData, setFormData] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
             <Grid container alignItems="center" justify="center" direction="column">
                <div className="inputs">
                    <Grid item className="input1">
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            value={formData.name}
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
                            value={formData.gender}
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
                        value={formData.os}
                        onChange={handleInputChange}
                        className="select"
                        >
                        <MenuItem key="mac" value="mac">
                            Sports
                        </MenuItem>
                        <MenuItem key="windows" value="windows">
                            Study
                        </MenuItem>
                        <MenuItem key="linux " value="linux">
                            Music
                        </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
             </Grid>
             <Button variant="contained" color="primary" type="submit">
                Submit
             </Button>
        </form>
        </div>
    )
}
export default MuiForm;