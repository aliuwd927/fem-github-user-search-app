import React from "react";
import {useState} from 'react';
import IconSearch from './assets/icon-search.svg';

function MidSection({userData,sendUserData}){
  
  const [userName,setUserName] = useState('');

  const API_URL = 'https://api.github.com/users/';

  function handleUserChange(e){
   setUserName(e.target.value)
  }

  async function fetchUserInfo(){

    //Chk to see if userName returns as a string
    //console.log(typeof userName)

    //Chk the concatentation of the two variables
    //console.log(API_URL+userName);
   

    //response, returns object, therefor response.text();
    let response = await fetch(API_URL+userName);

    //If the userName is valid, it should be 200
    if(response.status === 200){
      let data = await response.json();
      //Chk to ensure we return json Object
      //console.log(data);
      //send data to our closest common parent
      //common parents is going to be APP
      sendUserData(data);
    }else if(response.status === 404){
      //If 404, send empty object
      //This will trigger default render
      sendUserData({});
    }
    
    
  }

  return(
    <div className="MidSection" >
        <img src={IconSearch} alt="" className="IconSearch"/>
        <input className ='search' 
        type="text" title="search" 
        placeholder="Search Github Username" 
        value={userName}
        onChange={handleUserChange}
        />
        <button className ="searchButton" 
        onClick={fetchUserInfo}
        >
          search</button>
    </div>
  )
}

export default MidSection;