// reducers.js
const initialState = {
    isLogin: false,
    userName: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          isLogin: true,
          userName: action.payload.name,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          isLogin: false,
          userName: '',
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  