
export default {

  namespace: 'LoginModel',

  state: {
    loginStatus: false,
    loading: false,
    user: {},
    authorization: localStorage.authorization
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({type: 'loginRemote'})
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *loginRemote({ payload }, {call, put }) {
      let authorization = localStorage.authorization
      let loginStatus = localStorage.loginStatus
console.log(loginStatus);
      yield put({type: 'loginSuccess', payload: {
        user: {name: 'leo'}
      }});
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    loginSuccess (state, action) {
      return {
        ...state, ...action.payload, login: true
      }
    }
  },

};
