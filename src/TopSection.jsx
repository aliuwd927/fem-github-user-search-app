import React from 'react';
import DarkThemeImg from './assets/icon-moon.svg';
import LightThemeImg from './assets/icon-sun.svg';
import {useState} from 'react';


function TopSection({darkContainer}){

 

  const [isDark, setisDark] = useState(false);


    let [currentTheme, currentText, currentClassName] = isDark ? 
        [LightThemeImg,'Light','DarkTheme',document.body.style.backgroundColor = '#141D2F'] : 
        [DarkThemeImg,'Dark','LightTheme', document.body.style.backgroundColor = '#f6f8ff']


function handleBackgroundChange(e){
  //e is left for testing
  //toggle between dark and light state
  setisDark(!isDark);
  darkContainer(!isDark);
}


  return(
    <div className = "TopSection">
      <div className ="textHolder">
        <h3>Dev Finder</h3>
      </div>

    <div className ="LightOrDarkToggle" 
      value='LightTheme'
      onClick={handleBackgroundChange}>
      <h3 className ="ToggleText">{currentText}</h3>
        <img src={currentTheme} alt="" className={currentClassName}/>
      </div>
    </div>
  )
}

export default TopSection;