import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import { Button } from './components/ThemeButton';
import ScrollArrow from './components/ScrollArrow';

import NotFound from './components/NotFound';
import Home from './components/Home';
import Motion from './components/Motion';
import Clip from './components/Clip';
import Compo from './components/Compo';
import Stereo from './components/Stereo';

const App = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Switch>
            <Route exact path="/home">
              <Redirect from="/home" to="/"/>
            </Route>
            <Route exact path="/" component={Home}/>
            <Route exact path="/motion" component={Motion}/>
            <Route exact path="/compo" component={Compo}/>
            <Route exact path="/clip" component={Clip}/>
            <Route exact path="/stereo" component={Stereo}/>
            <Route exact path="/404" component={NotFound}/>
            <Redirect to="/404"/>
          </Switch>
        </Suspense>
        <Button onClick={toggleTheme} label="" />
        <ScrollArrow/>
      </Router>
    </div>
  )
}

export default App;