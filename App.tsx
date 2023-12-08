import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {Themes} from './Theme';
import {styles} from './styles';
import {navigationRef} from './src/services';
import {EMenuScreens} from './src/constants';
import {stores} from './src/stores/storesHolder';
import {ModalsStack} from './src/screens/modalsStack/ModalsStack';
import {NotificationModal} from './src/screens/components/notificationModal';
import {CreateRouteScreen} from './src/screens/menuScreens/createRouteScreen';
import {BackGround, MenuScreen, BootScreen, RoutesStack} from './src/screens';

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
              name={EMenuScreens.CreateRouteScreen}
              component={CreateRouteScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <NotificationModal />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
