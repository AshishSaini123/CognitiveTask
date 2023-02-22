import React from "react";
import "../styles/inputField.css"

const InputField :React.FC =()=>{
    return (
        <form className="input_form">
            <input type="text" placeholder="Enter Country" className="input_box" />
            <button className="submit_button">Go</button>
        </form>
    )
}

export default InputField;