import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export const ScreenNavigation = Stack.Screen;

const Navigation = ({ children }: PropsWithChildren): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>{children}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
