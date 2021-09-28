import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import { RNCamera } from 'react-native-camera'

const App = () => {

  let [camera, setCamera] = useState(''); //armazena ref da camera
  const [uri, setUri] = useState('') //endereço da imagem salva


  async function shot() {
    if (camera) {
      const options = { quality: 0.5, base64: true }
      const data = await camera.takePictureAsync(options)
      setUri(data.uri)
    }

  }

  return (
    <SafeAreaView>
      <View>
        <Text>OI :D :D</Text>
        <RNCamera
          ref={ref => { setCamera(ref) }} //ref da camera
          style={{ margin: 50, height: 200, width: 200 }}
          type={RNCamera.Constants.Type.front} //setando camera frontal
          flashMode={RNCamera.Constants.FlashMode.on} //ligando o flah
        />
        <Button
          title="Tirar Foto"
          onPress={shot}
        />
        <Image style={{ width: 100, height: 100 }} source={{ uri: uri }} />
      </View>
    </SafeAreaView>
  );
};



export default App;
