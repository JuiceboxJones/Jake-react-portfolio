import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './Routes/AboutMe';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import HomePage from './Routes/HomePage';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
    </div>
  );
}

export default App;
