import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Heroes from './components/Heroes';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/heroes" component={Heroes} />
        <Route exact path="/heroes/:id" component={Hero} />
      </Switch>
    </Router>
  );
};

export default App;