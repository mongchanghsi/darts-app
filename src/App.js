import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Instructions from './Components/Instructions';
import Feedback from './Components/Feedback';
import Navbar from './Components/Navbar';
import Setup from './Components/Setup';
import Intro from './Components/Intro';
import Cricket from './Game/Cricket';
import Countdown from './Game/Countdown';
import InProgress from './Components/InProgress';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path='/' component={Intro}/>
      <Route path='/setup' component={Setup}/>
      <Route path='/instructions' component={Instructions}/>
      <Route path='/feedback' component={Feedback}/>
      <Route path='/cricket' component={Cricket}/>
      <Route path='/countdown' component={Countdown}/>
      <Route path='/inprogress' component={InProgress}/>
    </div>
  );
}

export default App;
