import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstPage from '../screen/FirstPage';
import CreateAcc from '../screen/CreateAcc';
import SignIn from '../screen/SignIn';
import First from '../screen/First';
const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'First'} component={First} />
        <Stack.Screen name={'FirstPage'} component={FirstPage} />
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'CreateAcc'} component={CreateAcc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
