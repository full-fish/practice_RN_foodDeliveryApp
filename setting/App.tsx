import * as React from 'react';

import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './AppInner';

// 로그인 했을때 보이는 화면들
export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

// 로그인 안했을때 보이는 화면들
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
