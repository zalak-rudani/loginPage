import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import First from '../screen/First';
import Second from '../screen/Second';
import FirstPage from '../screen/FirstPage';
import CreateAcc from '../screen/CreateAcc';
import SignIn from '../screen/SignIn';
import CustomDrawer from '../components/CustomDrawer';
import {colors, hp} from '../helper/GlobalFunc';
import {Image, Text, View} from 'react-native';
import ConstantImages from '../helper/constants/ConstantImages';
import TabNavigator from './TabNavigator';
import TopTabNavigator from './TopTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Second"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerLabelStyle: {fontSize: 22},
        drawerActiveBackgroundColor: 'lightyellow',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: 'pink',
      }}>
      <Drawer.Screen
        name={'First'}
        component={First}
        options={{
          drawerIcon: ({focused}) => (
            <View
              style={{
                top: hp(-2),
              }}>
              <Image
                source={ConstantImages.home}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? 'sky' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={'Second'}
        component={TabNavigator}
        options={{
          drawerIcon: ({focused}) => (
            <View
              style={{
                top: hp(-2),
              }}>
              <Image
                source={ConstantImages.bag}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? 'sky' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={'FirstPage'}
        component={FirstPage}
        options={{
          drawerIcon: ({focused}) => (
            <View
              style={{
                top: hp(-2),
              }}>
              <Image
                source={ConstantImages.heart}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? 'sky' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={'SignIn'}
        component={SignIn}
        options={{
          drawerIcon: ({focused}) => (
            <View
              style={{
                top: hp(-2),
              }}>
              <Image
                source={ConstantImages.Notification}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? 'sky' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={'CreateAcc'}
        component={TopTabNavigator}
        options={{
          drawerIcon: ({focused}) => (
            <View
              style={{
                top: hp(-2),
              }}>
              <Image
                source={ConstantImages.bag}
                resizeMode="contain"
                style={{
                  height: hp(25),
                  width: hp(25),
                  tintColor: focused ? 'sky' : '#8D8D8D',
                }}
              />
              {/* <Text style={{fontSize: '15', textAlign: 'center'}}>Home</Text> */}
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
