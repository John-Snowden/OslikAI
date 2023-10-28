import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditReceiverModal} from './editReceiverModal';
import {AlertModal} from './alertModal';
import {EModals} from '../../constants';
import {CreateReceiverModal} from './createReceiverModal';

const Stack = createNativeStackNavigator();

export const ModalsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EModals.EditReceiverModal}
        component={EditReceiverModal}
        options={{animation: 'slide_from_bottom', presentation: 'modal'}}
      />
      <Stack.Screen name="AlertModal" component={AlertModal} />
      <Stack.Screen
        name={EModals.CreateReceinerModal}
        component={CreateReceiverModal}
      />
    </Stack.Navigator>
  );
};
