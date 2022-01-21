import React from 'react';
import DarkThemeImg from './assets/icon-moon.svg';


function TopSection(){

  return(
    <div className = "TopSection">
      <div className ="textHolder">
        <h3>Dev Finder</h3>
      </div>
      <div className ="LightOrDarkToggle">
        <h3 className ="ToggleText">Dark</h3>
        <img src={DarkThemeImg} alt="" className='SunAndMoon'/>
      </div>
    </div>
  )
}

export default TopSection;