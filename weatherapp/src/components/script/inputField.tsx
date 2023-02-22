import React,{useState} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "../styles/inputField.css"

const InputField :React.FC =()=>{

    const nav:NavigateFunction=useNavigate();
    const [query, setQuery] = useState <string>("")
    // console.log(query);
    const handleClick:()=>void=()=>{
        nav(`/${query}`)
    }
    return (
        <form className="input_form">
            <input type="text" placeholder="Enter Country"
            onChange={(e)=>setQuery(e.target.value)}
            className="input_box" />
            <button className="submit_button" 
            disabled={query?false:true}
            onClick={
                handleClick
            }>Go</button>
        </form>
    )
}

export default InputField;