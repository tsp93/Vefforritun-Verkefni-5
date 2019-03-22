import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/home/Home';
import Lecture from './routes/lecture/Lecture';

import './App.scss';


/*
todo:
- setja upp react-helmet
- setja upp react-router
- sækja routes
*/

class App extends Component {
  render() {
    return (
      <section>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:lecture" component={Lecture} />
          </Switch>
        </section>
    );
  }
}

export default App;
