import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TracksStack} from './src/screens';
import {ModalsStack} from './src/screens/modalsStack/ModalsStack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tracks" component={TracksStack} />
        <Stack.Screen name="Modals" component={ModalsStack} />
        {/* <Stack.Screen name="Settings" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
