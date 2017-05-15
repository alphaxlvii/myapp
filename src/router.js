import React from 'react';
import { Router, Route } from 'dva/router';
import App from './routes/app';
import UserPage from './routes/UserPage'

function RouterConfig({ history }) {
  return (
    <Router history={history} >
      <Route path="/" component={ App } >
        <Route path="/user" component={ UserPage } />
      </Route>
    </Router>
  );
}

export default RouterConfig;
