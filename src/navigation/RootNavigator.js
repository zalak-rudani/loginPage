import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import First from '../screen/First';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import TopTabNavigator from './TopTabNavigator';
import Cart from '../screen/Cart';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Cart'} component={Cart} />

        {/* <Stack.Screen name={'First'} component={First} />
        <Stack.Screen name={'Second'} component={DrawerNavigator} /> */}
        {/* <Stack.Screen name={'Second'} component={DrawerNavigator} /> */}
        {/* <Stack.Screen name={'SignIn'} component={DrawerNavigator} />

        {/* <Stack.Screen name={'FirstPage'} component={FirstPage} />
        <Stack.Screen name={'SignIn'} component={SignIn} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
