import React from 'react';
import Init from './screens/Init/Init';
import Navigation, {
  ScreenNavigation,
} from './components/Navigation/Navigation';
import Login from './screens/Login/Login';
import BackHeader from './components/BackHeader/BackHeader';

function App(): React.JSX.Element {
  return (
    <Navigation>
      <ScreenNavigation
        name="Init"
        component={Init}
        options={{ header: () => <></> }}
      />
      <ScreenNavigation
        name="Login"
        component={Login}
        options={{
          header: ({ navigation }) => <BackHeader navigation={navigation} />,
        }}
      />
    </Navigation>
  );
}

export default App;
