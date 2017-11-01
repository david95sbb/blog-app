import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './initial/home';
import Login from './initial/login';
import Signup from './initial/signup';

const Header = ( ) => {
  return (
      <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
      </nav>
  );
};

const App = ( ) => {
    return (
        <Router>
            <div>
                <Header></Header>
                <Route exact path="/" component={ Home }></Route>
                <Route path="/signup" component={ Signup }></Route>
                <Route path="/login" component={ Login }></Route>
                <h2>Blog David</h2>
            </div>
        </Router>
    );
};

export default App;