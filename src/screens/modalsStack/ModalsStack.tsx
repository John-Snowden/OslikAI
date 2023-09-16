import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditModal} from './editModal';
import {AlertModal} from './alertModal';

const Stack = createNativeStackNavigator();

export const ModalsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="EditModal" component={EditModal} /> */}
      <Stack.Screen
        name="AlertModal"
        component={AlertModal}
        options={{animation: 'slide_from_bottom', presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};
