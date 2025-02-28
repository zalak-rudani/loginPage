import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CreateAcc from '../screen/CreateAcc';
import SignIn from '../screen/SignIn';
import First from '../screen/First';
import Second from '../screen/Second';
import FirstPage from '../screen/FirstPage';
import {colors, hp} from '../helper/GlobalFunc';
import ConstantImages from '../helper/constants/ConstantImages';
import DrawerNavigator from './DrawerNavigator';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'fade',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: hp(90),
          backgroundColor: '#fff',
          borderRadius: 20,
          position: 'absolute',

          //   bottom: hp(10),
        },
      }}>
      <Tab.Screen
        name={'Second'}
        component={Second}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: hp(10),
              }}>
              <Image
                source={ConstantImages.home}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? '#C67C4E' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'SignIn'}
        component={SignIn}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: hp(10),
              }}>
              <Image
                source={ConstantImages.heart}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? '#C67C4E' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>heart</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'CreateAcc'}
        component={CreateAcc}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: hp(10),
              }}>
              <Image
                source={ConstantImages.bag}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? '#C67C4E' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>bag</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'First'}
        component={First}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: hp(10),
              }}>
              <Image
                source={ConstantImages.Notification}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? '#C67C4E' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>
                Notification
              </Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
