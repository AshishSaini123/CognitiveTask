import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/countryInfo.css"
const CountryInfo:React.FC=()=>{

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
    
    const fetchApi:()=>void=async()=>{
        console.log('inside fetch')
        fetch(`https://restcountries.com/v3.1/name/${country.country}`)
        .then(res=>res.json()).then(data=>{
            setData(data)
            console.log(data);
            console.log(data[0].flag.svg)
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
            {data.length>0?<button className="capital_btn">{`${data[0].capital[0]} weather`}</button>:null}
        </div>
    )
}

export default CountryInfo;