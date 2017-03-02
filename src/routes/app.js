import React from 'react';
import { connect } from 'dva';
import LoginPage from './LoginPage';

function App(props, app) {
  const { loginStatus } = app;
  return (
    <div>
      { !loginStatus ? <LoginPage/>: 1}
    </div>
  );
}

App.propTypes = {
};


export default connect(({app}) => ({app}))(App);
