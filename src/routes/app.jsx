import React from 'react';
import { connect } from 'dva';
import LoginPage from './LoginPage';
import { getLocalStorage } from '../utils/helper';

function App(props) {
  const loginStatus = getLocalStorage('loginStatus');
  const {dispatch} = props;

  const loginProps = {
    loginFunc(data){
      dispatch({type:'LoginModel/loginRemote', payload: data})
      console.log('loginFunc')
    }
  };
  return (
    <div>
      { !loginStatus ? <LoginPage {...loginProps}/> : 1}
    </div>
  );
}

App.propTypes = {
};

export default connect()(App)
