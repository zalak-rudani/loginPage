import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ConstantImages from '../helper/constants/ConstantImages';
import {Directions} from 'react-native-gesture-handler';
import {hp, wp} from '../helper/GlobalFunc';
import TabNavigator from '../navigation/TabNavigator';

const Second = () => {
  return (
    <SafeAreaView style={styles.main}>
      <LinearGradient style={styles.upperView} colors={['#131313', '#313131']}>
        <View>
          {/* <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>Location</Text>
            <TouchableOpacity style={styles.locationName}>
              <Text style={styles.bigText}>{'\nBilzen,Tanjungbalai'}</Text>{' '}
              <Image
                style={styles.downArrow}
                source={ConstantImages.downArrow}
              />
            </TouchableOpacity>
          </View> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.text}>Location</Text>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>{'Bilzen,Tanjungbalai'}</Text>
                <Image
                  style={styles.downArrow}
                  source={ConstantImages.downArrow}
                />
              </TouchableOpacity>
            </View>
            <Image style={styles.image44} source={ConstantImages.lady} />
          </View>
        </View>

        {/* <View style={styles.searchView}>
          <Image style={styles.image20} source={ConstantImages.search} />
          <TextInput
            placeholder="Search coffee"
            placeholderTextColor="#989898"
          />
          <Image style={styles.image44} source={ConstantImages.filterIcon} />
        </View> */}
      </LinearGradient>
      <View style={styles.lowerView}> </View>
    </SafeAreaView>
  );
};

export default Second;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#131313',
  },

  upperView: {
    flex: 1,
    // alignItems: 'center',
  },
  lowerView: {
    flex: 2,
    backgroundColor: '#F9F9F9',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },

  locationName: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  downArrow: {
    height: hp(14),
    width: hp(14),
  },

  bigText: {
    fontSize: 14,
    // fontWeight: '600',
    color: '#fff',
  },

  image44: {
    height: hp(44),
    width: hp(44),
  },
  image20: {
    height: hp(20),
    width: hp(20),
  },

  searchView: {
    height: hp(52),
    width: wp(315),
    borderRadius: 15,
    backgroundColor: '#313131',
    alignItems: 'center',
    // justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: hp(15),
  },
});

// <View style={styles.locationView}>
// <View style={{flexDirection: 'column', marginHorizontal: wp(21)}}>
//   <Text style={styles.text}>Location</Text>{' '}
//   <TouchableOpacity style={styles.locationName}>
//     <Text style={styles.bigText}>{'\nBilzen,Tanjungbalai'}</Text>
//     <Image
//       style={styles.downArrow}
//       source={ConstantImages.downArrow}
//     />
//   </TouchableOpacity>
// </View>
// </View>
