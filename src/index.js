import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import Dashboard from './Admin/Dashboard';

ReactDOM.render(
  <>
    <Router>
    <Switch>
    <Route path='/admin'  component={Dashboard}/>
    <Route path='/' strict component={App}/>
    </Switch>
    </Router>
    </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
