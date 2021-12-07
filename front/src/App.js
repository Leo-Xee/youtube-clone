import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import auth from './hoc/auth';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={auth(LandingPage, false)} />
          <Route exact path="/login" component={auth(LoginPage, false)} />
          <Route exact path="/register" component={auth(RegisterPage, false)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
