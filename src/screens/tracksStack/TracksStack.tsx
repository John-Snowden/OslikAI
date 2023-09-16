import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ReceiversScreen} from './receiversScreen';
import {TracksScreen} from './tracksScreen';
import {TrackOverViewScreen} from './TrackOverViewScreen';
import {BackGround} from '../components';

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
