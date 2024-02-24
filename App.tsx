import {StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {Themes} from './Theme';
import {styles} from './styles';
import {navigationRef} from './src/services';
import {EMenuScreens} from './src/constants';
import {ModalsStack} from './src/screens/modalsStack/ModalsStack';
import {NotificationModal} from './src/screens/components/notificationModal';
import {
  NameRouteScreen,
  CreateCustomRouteScreen,
} from './src/screens/menuScreens';
import {
  BackGround,
  MenuScreen,
  BootScreen,
  RoutesStack,
  FeedbackScreen,
  InstructionsScreen,
} from './src/screens';

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
        <NavigationContainer theme={MyTheme} ref={navigationRef}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={BootScreen} />
            <Stack.Screen name="RoutesStack" component={RoutesStack} />
            <Stack.Screen
              name="Modals"
              component={ModalsStack}
              options={{presentation: 'transparentModal', animation: 'fade'}}
            />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen
              name={EMenuScreens.InstructionsScreen}
              component={InstructionsScreen}
            />
            <Stack.Screen
              name={EMenuScreens.FeedbackScreen}
              component={FeedbackScreen}
            />
            <Stack.Screen
              name={EMenuScreens.NameRouteScreen}
              component={NameRouteScreen}
            />
            <Stack.Screen
              name={EMenuScreens.CreateCustomRouteScreen}
              component={CreateCustomRouteScreen}
            />
          </Stack.Navigator>
          <NotificationModal />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
