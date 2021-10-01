import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service'

const App = () => {

  const hasPermission = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => { } },
        ],
      );
    }

    return false;
  };


  useEffect(() => {
    console.log('teste')
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log('posição', position);
    //   },
    //   (error) => {
    //     // See error code charts below.
    //     console.log('erro', error.code, error.message);
    //   },
    //   { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })

    const watchID = Geolocation.watchPosition(res => console.log(res))
    // console.log(watchID)

  }, [])



  return (
    <SafeAreaView>
      <View>
        <Text>OI</Text>

      </View>
    </SafeAreaView>
  );
};



export default App;
