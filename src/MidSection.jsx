import React from "react";
import IconSearch from './assets/icon-search.svg';

function MidSection(){
  
  return(
    <div className="MidSection">
      <div className = "inputContainer">
        <img src={IconSearch} alt="" className="IconSearch"/>
        <input className ='search'type="text" title="search" placeholder="Search Github Username"/>
        <button className ="searchButton">search</button>
      </div>
      
    </div>
  )
}

export default MidSection;