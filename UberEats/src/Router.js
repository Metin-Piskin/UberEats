import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

const Stack = createNativeStackNavigator();

import Home from './Pages/Home';
import Detail from './Pages/Detail';
import OrderCompletd from './Pages/OrderCompletd';

const Router = () => {
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Detail' component={Detail} />
                    <Stack.Screen name='OrderCompletd' component={OrderCompletd} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}

export default Router;