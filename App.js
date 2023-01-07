import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import main from './display/main';
import details from './display/details';

const Stack = createNativeStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={main} /> 
        <Stack.Screen name="details" component={details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;


