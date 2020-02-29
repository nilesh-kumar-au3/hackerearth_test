import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notfound from './/notfound';
import detail from './details';
import { Route, BrowserRouter as Router,Switch  } from 'react-router-dom'

const routing = (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/detail/:key" component={detail} />
        <Route component={Notfound} />
      </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

