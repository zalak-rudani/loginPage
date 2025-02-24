import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import First from '../screen/First';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={'First'} component={First} />
      <Drawer.Screen name={'Second'} component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
