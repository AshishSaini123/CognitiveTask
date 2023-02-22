import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import InputField from './components/script/inputField';
const App :React.FC=()=> {
  return (
    <div className="App">
        <span>Weather Report</span>
        <BrowserRouter>
        <AllRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;
