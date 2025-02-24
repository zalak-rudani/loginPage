import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import First from '../screen/First';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'First'} component={First} />
        <Stack.Screen name={'Second'} component={TabNavigator} />
        {/* <Stack.Screen name={'FirstPage'} component={FirstPage} />
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'CreateAcc'} component={CreateAcc} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
