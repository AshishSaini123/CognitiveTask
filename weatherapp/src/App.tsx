import React from 'react';
import './App.css';
import InputField from './components/script/inputField';
const App :React.FC=()=> {
  return (
    <div className="App">
        <span>Weather Report</span>
        <InputField />
    </div>
  );
}

export default App;
