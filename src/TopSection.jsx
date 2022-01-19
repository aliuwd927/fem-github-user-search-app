import React from 'react';
import LightImg from './assets/icon-sun.svg';

function TopSection(){
  return(
    <div className = "TopSection">
      <div className ="textHolder">
        <h3>Dev Finder</h3>
      </div>
      <div className ="LightOrDarkToggle">
        <h2 className ="ToggleText">Light</h2>
        <img src={LightImg} alt=""/>
      </div>
    </div>
  )
}

export default TopSection;