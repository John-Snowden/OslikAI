import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TracksScreen} from './tracksScreen';
import {ReceiversScreen} from './receiversScreen';
import {TrackOverViewScreen} from './TrackOverViewScreen';

const Stack = createNativeStackNavigator();

export const TracksStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ReceiversScreen" component={ReceiversScreen} />
        <Stack.Screen name="TracksScreen" component={TracksScreen} />
        <Stack.Screen
          name="TrackOverViewScreen"
          component={TrackOverViewScreen}
        />
      </Stack.Navigator>
    </>
  );
};
