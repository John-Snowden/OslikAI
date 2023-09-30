import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {BackGround, TracksStack} from './src/screens';
import {ModalsStack} from './src/screens/modalsStack/ModalsStack';
import {Themes} from './Theme';

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
    <SafeAreaProvider>
      <BackGround />
      <StatusBar barStyle={'light-content'} backgroundColor={Themes.blue23} />
      <SafeAreaView style={styles.flex}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tracks" component={TracksStack} />
            <Stack.Screen name="Modals" component={ModalsStack} />
            {/* <Stack.Screen name="Settings" component={} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
