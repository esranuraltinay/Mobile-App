import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const MusicPlayer = () => {
  return (
    <View style = {style.container}>
      <Text>React Native Music Player</Text>
    </View>
  );
};

export default MusicPlayer;

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : '#555',
        alignItems : 'center',
        justifyContent:'center',
    },
});
