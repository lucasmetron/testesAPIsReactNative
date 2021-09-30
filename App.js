import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll'

import { RNCamera } from 'react-native-camera'

const App = () => {

  let [camera, setCamera] = useState(''); //armazena ref da camera
  const [uri, setUri] = useState('') //endereço da imagem salva

  useEffect(() => {
    async function get() {
      let response = await CameraRoll.getPhotos({
        first: 10,
        assetType: 'Photos',

      })
      console.log('responde', response)
    }
    get();


  }, [])


  async function shot() {
    console.log('teste')
    if (camera) {
      const options = { quality: 0.5, base64: true }
      const data = await camera.takePictureAsync(options)
      setUri(data.uri)
      console.log(data)
      await CameraRoll.save(data.uri, { type: 'photo' })
      get()
    }

  }


  return (
    <SafeAreaView>
      <View>
        <Text>OI</Text>
        <RNCamera
          ref={ref => { setCamera(ref) }} //ref da camera
          style={{ margin: 50, height: 200, width: 200 }}
          type={RNCamera.Constants.Type.front} //setando camera frontal
          flashMode={RNCamera.Constants.FlashMode.on} //ligando o flah
        />
        <Button
          title="Tirar Fotooo"
          onPress={shot}
        />
        <Image style={{ width: 100, height: 100 }} source={{ uri: uri }} />
      </View>
    </SafeAreaView>
  );
};



export default App;
