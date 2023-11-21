import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NewModal} from './newModal';
import {EModals} from '../../constants';
import {ConfirmModal} from './confirmModal';
import {EditSenderModal} from './editSenderModal';
import {DeleteSenderModal} from './deleteSenderModal';
import {EditReceiverModal} from './editReceiverModal';
import {CreateReceiverModal} from './createReceiverModal';
import {DeleteReceiverModal} from './deleteReceiverModal';

const Stack = createNativeStackNavigator();

export const ModalsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EModals.EditReceiverModal}
        component={EditReceiverModal}
        options={{animation: 'slide_from_bottom', presentation: 'modal'}}
      />
      <Stack.Screen name="EditSenderModal" component={EditSenderModal} />
      <Stack.Screen name="ConfirmModal" component={ConfirmModal} />
      <Stack.Screen
        name={EModals.CreateReceinerModal}
        component={CreateReceiverModal}
      />
      <Stack.Screen
        name="DeleteReceiverModal"
        component={DeleteReceiverModal}
      />
      <Stack.Screen name="DeleteSenderModal" component={DeleteSenderModal} />
      <Stack.Screen name="NewModal" component={NewModal} />
    </Stack.Navigator>
  );
};
