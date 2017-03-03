import React from 'react';
import { connect } from 'dva';
import LoginPage from './LoginPage';

function App(props) {
  const loginStatus = props.loginStatus;

  const loginProps = {
    loginFunc(data){
      props.dispatch ({type:'loginRemote', payload: data})
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
function mapStateToProps(state, ownProps) {
  return {
    loginStatus: localStorage.loginStatus,
  };
}

export default connect(mapStateToProps)(App);
