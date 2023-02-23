
import React ,{useEffect, useState}from "react";
import { useParams } from "react-router-dom";
import "../styles/capitalWeather.css"

const CapitalWeather:React.FC=()=>{
    const [data,setData]=useState<obj>()
    const capital=useParams();
    console.log(capital);

    interface obj1{
        precip:number;
        temperature:number;
        weather_icons:string[];
        wind_speed:number;
        wind_dir:string
    }
    
    interface obj{
        current:obj1;
    }

    const fetchApi:()=>void=async()=>{
        console.log('inside fetch')
        fetch(`http://api.weatherstack.com/current?access_key=55759d2c7af58cf4bb14865c8b2aebd9&query=${capital.capital}`)
        .then(res=>res.json()).then(dat=>{
            setData(dat)
        });
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <div>
            {data?.current!==undefined?<div className="container">
                <h2>{capital.capital?.toUpperCase()}</h2>
                <p className="temp">{`Current temperature is ${data.current.temperature} °C`}</p>
                <p className="weather_icon"><img src={data.current.weather_icons[0]}/></p>
                <p className="wind_speed">{`Wind speed is ${data.current.wind_speed} KM/H`}</p>
                <p className="preci">{`Precipiation is ${data.current.precip}`}</p>
            </div>:<>...loading</>}
        </div>
    )
}

export default CapitalWeather;