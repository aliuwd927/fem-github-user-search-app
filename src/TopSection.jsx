import React from 'react';
import DarkThemeImg from './assets/icon-moon.svg';


function TopSection(){

  //This is temporary need to return to fix
const renderDefaultLight = () => {
  return(
    <div className ="LightOrDarkToggle">
        <h3 className ="ToggleText">Dark</h3>
        <img 
        src={DarkThemeImg} 
        alt="" 
        className='SunAndMoon'
        onClick={handleBackgroundChange}/>
      </div>
  )
}


function handleBackgroundChange(){
  console.log('test')
}

  return(
    <div className = "TopSection">
      <div className ="textHolder">
        <h3>Dev Finder</h3>
      </div>
        {renderDefaultLight()}
    </div>
  )
}

export default TopSection;