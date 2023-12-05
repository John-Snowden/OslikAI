import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SendersScreen} from './sendersScreen';
import {OverviewScreen} from './overviewScreen';
import {ReceiversScreen} from './receiversScreen';

const Stack = createNativeStackNavigator();

export const RoutesStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ReceiversScreen" component={ReceiversScreen} />
        <Stack.Screen name="SendersScreen" component={SendersScreen} />
        <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
      </Stack.Navigator>
    </>
  );
};
