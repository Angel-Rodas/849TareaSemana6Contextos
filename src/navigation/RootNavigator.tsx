import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabsNavigator} />
    </Stack.Navigator>
  );
}
