import './App.css';
import TopSection from './TopSection';
import MidSection from './MidSection';
import BottomSection from './BottomSection';
import { useState } from 'react';

function App() {

const [userDataState, setUserDataState] = useState({}); 

//Checks to see if userDataState is empty or has an Object
//console.log(userDataState);

  return (
    <div className="App">
      <TopSection/>
      <MidSection 
      //sendUserData is a function 
      //TREAT THIS LIKE A STANDARD FUNC THAT CAN ACCEPT AND ARG...NVR FORGET...PLS...
      sendUserData = {(parameter)=>setUserDataState(parameter)}
      />
     
      <BottomSection 
      //TREAT THIS LIKE KEY PAIR VALUES
      //userData.propertyName
      userData={userDataState}/>
    </div>
  );
}

export default App;
