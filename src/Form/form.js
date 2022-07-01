import React, { useState } from "react";
import './form.css';
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
            <div className="input">
                <div className="label">
                    <label>Select Date</label>
                </div>
                <input type="date" onChange={inputDateHandler} />
                <div className="label">
                    <label>Enter Name</label>
                </div>
                <input type="text" onChange={inputNameHandler} />
            </div>
            <div className="buttons">
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button type="submit" onClick={handleShowData}> Show Submitted Data </button>
                {
                    display
                     ?
                      <div> {data} </div>
                     : 
                    null
                }
            </div>
        </div>
    )
}
export default Form;