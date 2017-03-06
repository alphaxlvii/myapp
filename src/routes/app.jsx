import React from 'react';
import { connect } from 'dva';
import LoginPage from './LoginPage';
import IndexPage from './IndexPage';
import { getLocalStorage } from '../utils/helper';

function App(props) {
  const loginStatus = getLocalStorage('loginStatus');
  const loginProps = {

  };
  const indexProps = {
  }

  console.log(loginStatus)

  return (

       !loginStatus ? <LoginPage {...loginProps}/> : <IndexPage {...indexProps}/>

  );
}

App.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect()(App)
