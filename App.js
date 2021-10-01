import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import {
  accelerometer,
  gyroscope,
  magnetometer,
  barometer,
  setUpdateIntervalForType,
  SensorTypes
} from 'react-native-sensors'

const App = () => {
  useEffect(() => {
    accelerometer.subscribe(({ x, y, z }) => {
      console.log(x, y, z);
    })

    barometer.subscribe(({ pressure }) => {
      console.log(pressure)
    })

    setUpdateIntervalForType(SensorTypes.barometer, 1000); //nesta função podemos escolher qual sensor queremos mudar o tempo de leitura

  }, [])



  return (
    <SafeAreaView>
      <View>
        <Text>OI</Text>
        <Text>OI</Text>

      </View>
    </SafeAreaView>
  );
};



export default App;
