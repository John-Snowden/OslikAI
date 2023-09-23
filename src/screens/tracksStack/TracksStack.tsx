import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BackGround} from '../components';
import {TracksScreen} from './tracksScreen';
import {ReceiversScreen} from './receiversScreen';
import {TrackOverViewScreen} from './TrackOverViewScreen';

const Stack = createNativeStackNavigator();

export const TracksStack = () => {
  return (
    <>
      <BackGround />
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
