import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Editar from './components/editar';
import Nuevo from './components/nuevo';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render ={ props => ( <Login {...props} /> )}></Route>
          <Route path="/dashboard" exact render ={ props => ( <Dashboard {...props} /> )}></Route>
          <Route path="/editar/:id" exact render ={ props => ( <Editar {...props} /> )}></Route>
          <Route path="/nuevo" exact render ={ props => ( <Nuevo {...props} /> )}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
