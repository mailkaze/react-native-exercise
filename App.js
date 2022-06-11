import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name='Profile'
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


