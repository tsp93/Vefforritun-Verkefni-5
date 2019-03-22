import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from './routes/home/Home';
import Lecture from './routes/lecture/Lecture';
import NotFound from './routes/notFound/NotFound';

import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Helmet defaultTitle="Fyrirlestrar" titleTemplate="Fyrirlestrar - %s" />
        <section>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/:slug" component={Lecture} />
              <Route component={NotFound} />
            </Switch>
        </section>
      </main>
    );
  }
}

export default App;
