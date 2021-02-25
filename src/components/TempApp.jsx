import React, { useEffect } from 'react';
import "./css/Style.css";
import {useState} from "react"

 const TempApp = () => {
    const [city, setCity]= useState(null);
    const [search, setsearch]=useState("Noida");

    useEffect(()=>{
        const fetchApi=async()=>{
            console.log('2423423')
            const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bddac011e8629beb97d05f2d56b1b023`
       const response=await fetch(url);
       const jsData= await response.json();
       console.log(jsData);
    setCity(jsData.main);
        }
        
        fetchApi();
      
    },[search])

   
    return (<>
        <div className="box">
            <div className="inputData">
                <input type="search"
                className="inputFeild"
                onChange={(event)=>{  setsearch(event.target.value)
                   

                }}
                />
            </div>
            {!city?(<p>Not found</p>):(
                <div>
                 <div className="info">
                 <h2 className="location">
                 <i className="fas fa-street-view"></i>{search}
                 </h2>
                 <h1 className="tempr">
                 {city.temp}°c
                 </h1>
                 <h3 className="tempmin_max">min: {city.temp_min}°c| max: {city.temp_max}°c</h3>
                         </div>
                         <div className="wave-one"></div>
                         <div className="wave-two"></div>
                         <div className="wave-three"></div>
                         </div>

            )}
           
        
       
        </div>
        </>
    )
}
export default TempApp;
