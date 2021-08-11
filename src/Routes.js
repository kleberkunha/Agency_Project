import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import Agency from './pages/Agency';
import Works from './pages/Projects';
import Platon from './pages/Projects/StudyCase/Platon';
import Sedal from './pages/Projects/StudyCase/Sedal';
import Solane from './pages/Projects/StudyCase/Solane';

export default () => {
  return  (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  path="/agency">
        <Agency/>
      </Route>
      <Route  exact path="/works">
        <Works/>
      </Route>
      <Route exact path ="/works/platon">
        <Platon/>
      </Route>
      <Route exact path ="/works/sedal">
        <Sedal/>
      </Route>
      <Route exact path ="/works/solane">
        <Solane/>
      </Route>
    </Switch>
  );
}