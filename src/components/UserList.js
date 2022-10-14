import React, { useState } from 'react'
import '../App.css'

function UserList() {
    const [cityName, setCityname] = useState('');
    const [data, setdata] = useState(['']);
    const [newdata,setnewdata ] = useState(['']);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9b199144a9msh2c7631e376f6963p122181jsn8fd63afaec68',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
const searchHere = () =>{
    const city = cityName;
    console.log(city);
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then(response => response.json())
    .then(response => setdata(response.location))
    .catch(err => console.error(err));
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then(response => response.json())
    .then(myresponse => setnewdata(myresponse.current))
    .catch(err => console.error(err));
}

    

   
  return (
    <div className='App'>
            <h2>User List with Images</h2>
            <input type="text" onChange={(e)=>{
                    setCityname(e.target.value)
            }} />

            <button onClick={searchHere}>Search here</button>
            <h3>{data.country}</h3>
            <h3>{data.region}</h3>
            <h3>{newdata.temp_c}</h3>
            
            {/* {
                data.location.map((value)=>{
                    <div>
                        <h2>{value.country}</h2>
                        <h2>{value.region}</h2>
                    </div>
                })
            }
                  */}
                  
    </div>
  )
}

export default UserList