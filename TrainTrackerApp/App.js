import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: '#1E3A8A' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' }
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'SNCFT Tracker - Banlieue Sud' }}
                />
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{ title: 'Trains en Temps Réel' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
