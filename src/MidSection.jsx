import React from "react";
import {useState} from 'react';
import IconSearch from './assets/icon-search.svg';

function MidSection(){
  const [userName,setUserName] = useState('');

  const API_URL = 'https://api.github.com/users/';

  function handleUserChange(e){
    console.log(e.target)
  }

  async function fetchUserInfo(){
    //response, returns object, therefor response.text();
    let response = await fetch(API_URL);
  
    if(response.status === 200){
      let data = await response.json();
    }
    
    
  }

  fetchUserInfo();

  return(
    <div className="MidSection" >
        <img src={IconSearch} alt="" className="IconSearch"/>
        <input className ='search' type="text" title="search" placeholder="Search Github Username" onChange={handleUserChange}/>
        <button className ="searchButton">search</button>
    </div>
  )
}

export default MidSection;