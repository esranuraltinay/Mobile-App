import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Controller({ onPlayPause, onNext, onPrev, onShuffle, onVolume, onFavorite, isPlaying, isShuffling, isMuted, isFavorite }) {
  const returnPlayBtn = () => {
    if (isPlaying) {
      return <Icon color="#fff" name="pause" size={45} />;
    } else {
      return <Icon color="#fff" name="play-arrow" size={45} />;
    }
  };

  const returnShuffleBtn = () => {
    if (isShuffling) {
      return <Icon color="#fff" name="shuffle" size={45} />;
    } else {
      return <Icon color="#fff" name="shuffle" size={45} style={{ opacity: 0.5 }} />;
    }
  };

  const returnVolumeBtn = () => {
    if (isMuted) {
      return <Icon color="#fff" name="volume-off" size={45} />;
    } else {
      return <Icon color="#fff" name="volume-up" size={45} />;
    }
  };

  const returnFavoriteBtn = () => {
    if (isFavorite) {
      return <Icon color="red" name="favorite" size={45} />;
    } else {
      return <Icon color="#fff" name="favorite-border" size={45} />;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onShuffle}>
        {returnShuffleBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPrev}>
        <Icon color="#fff" name="skip-previous" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
        {returnPlayBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Icon color="#fff" name="skip-next" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onVolume}>
        {returnVolumeBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onFavorite}>
        {returnFavoriteBtn()}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 350,
  },
});
