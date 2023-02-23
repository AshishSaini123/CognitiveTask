import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/countryInfo.css"
const CountryInfo:React.FC=()=>{

    const nav=useNavigate();
    interface fla{
        png:string,
        svg:string,
        alt:string,
    }
    interface obj{
        capital:string[],
        population:number,
        latlng:number[],
        flags:fla,
        
    }
    
    
    const [data,setData]=useState<obj[]>([])
    let country=useParams();
    
    const handleClick:()=>void=()=>{
        nav(`/map/${data[0].capital[0]}`)
    }
    const fetchApi:()=>void=async()=>{
        console.log('inside fetch')
        fetch(`https://restcountries.com/v3.1/name/${country.country}`)
        .then(res=>res.json()).then(data=>{
            setData(data)
        });
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <div className="info_container">
           { data.length>0 ?<div><span className="capital">
                {`Capital of ${country.country} is ${data[0].capital[0]}`}
            </span>
            <span className="population">
                {`Population is ${data[0].population}`}
            </span> 
             <span className="latlong"> 
                {`Latitude is ${data[0].latlng[0]} & Longitude is ${data[0].latlng[1]}`}
            </span>
            <span className="flag">
                <img src={`${data[0].flags.svg}`} alt={data[0].flags.alt} />
            </span>
            </div>:<>...loading</>}
            {data.length>0?<button className="capital_btn" onClick={handleClick}>{`${data[0].capital[0]} weather`}</button>:null}
        </div>
    )
}

export default CountryInfo;