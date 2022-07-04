import React, { useState } from "react";
import './form.css';
import { motion } from 'framer-motion';
function Form(){
    const [inputDate, setInputDate] = useState('');
    const [inputName, setInputName] = useState('');
    const [data, setData] = useState('')
    const [display, setDisplay] = useState(false)
    const inputDateHandler = (event) => {
        setInputDate(event.target.value)
    }

    const inputNameHandler = (event) => {
        setInputName(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const info =[];
        info.push(inputName,inputDate)
        setData(info)
    }
    const handleShowData = () => {
        const toggle = display ? false : true;
        setDisplay(toggle)
    }

    return (
        <div className="container">
            <motion.div className="input"
            initial={{ x: "-200px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: 'tween',
                duration: 2
              }}
            >
                <div className="label">
                    <label>Select Date</label>
                </div>
                <input type="date" onChange={inputDateHandler} />
                <div className="label">
                    <label>Enter Name</label>
                </div>
                <input type="text" onChange={inputNameHandler} />
            </motion.div>
            <motion.div className="buttons"
            whileHover={{ opacity: 0.5 }}>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button type="submit" onClick={handleShowData}> Show Submitted Data </button>
                {
                    display
                     ?
                      <div> {data} </div>
                     : 
                    null
                }
            </motion.div>
        </div>
    )
}
export default Form;