import './App.css';
import TopSection from './TopSection';
import MidSection from './MidSection';
import BottomSection from './BottomSection';
import { useState } from 'react';

function App() {

const [userDataState, setUserDataState] = useState({}); 
//const [isContainerDark, setIsContainerDark] = useState();

  return (
    <div className="App">
      <TopSection
      isContainerDark = {(colorContainer)=>setIsContainerDark(colorContainer)}
      />
      <MidSection 
      //sendUserData is a function 
      //TREAT THIS LIKE A STANDARD FUNC THAT CAN ACCEPT AND ARG...NVR FORGET...PLS...
      sendUserData = {(parameter)=>setUserDataState(parameter)}
      //if isContianer = true, render dark
      />
     
      <BottomSection 
      //TREAT THIS LIKE KEY PAIR VALUES
      //userData.propertyName
      userData={userDataState}
      //if isContianer = true, render dark
      />
    </div>
  );
}

export default App;
