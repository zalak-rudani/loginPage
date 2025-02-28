import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import First from '../screen/First';
import Second from '../screen/Second';
import FirstPage from '../screen/FirstPage';
import CreateAcc from '../screen/CreateAcc';
import SignIn from '../screen/SignIn';
import {hp} from '../helper/GlobalFunc';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      initialRouteName="CreateAcc"
      screenOptions={{
        // tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'black',
        tabBarShowLabel: true,
        tabBarStyle: {
          justifyContent: 'center',
          height: hp(90),
          backgroundColor: '#fff',
          // borderRadius: 20,
          position: 'absolute',

          //   bottom: hp(10),
        },
        tabBarGap: 20,
        tabBarLabelStyle: {fontSize: 20},
        // tabBarItemStyle: {width: 500},
      }}>
      <TopTab.Screen name={'First'} component={First} />
      <TopTab.Screen name={'Second'} component={Second} />
      <TopTab.Screen name={'FirstPage'} component={FirstPage} />
      <TopTab.Screen name={'SignIn'} component={SignIn} />
      <TopTab.Screen name={'CreateAcc'} component={CreateAcc} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
