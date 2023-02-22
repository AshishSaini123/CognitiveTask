import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InputField from "../components/script/inputField";
import React from "react";
import CountryInfo from "../components/script/countryInfo";

const AllRoutes:React.FC=()=>{

    return (
        <Routes>
            <Route path="/" element={<InputField />} />
            <Route path="/:country" element={<CountryInfo />} />
            <Route path="/" element={<div>Hii</div>} />
        </Routes>
    )
}

export default AllRoutes;