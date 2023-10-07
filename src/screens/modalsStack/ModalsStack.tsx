import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditModalReceiverModal} from './editModal';
import {AlertModal} from './alertModal';
import {EModals} from '../../constants';

const Stack = createNativeStackNavigator();

export const ModalsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EModals.EditReceiverModal}
        component={EditModalReceiverModal}
        options={{animation: 'slide_from_bottom', presentation: 'modal'}}
      />
      <Stack.Screen name="AlertModal" component={AlertModal} />
    </Stack.Navigator>
  );
};
