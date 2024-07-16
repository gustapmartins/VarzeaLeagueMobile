import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export default function SocialMediaButton() {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <AnimatedTouchableOpacity
        style={[styles.buttonSocialMedia, { transform: [{ scale: scaleValue }] }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Icon style={styles.icon} name="google" />
        <Text>Entrar com o Google</Text>
      </AnimatedTouchableOpacity>

      <AnimatedTouchableOpacity
        style={[styles.buttonSocialMedia, { transform: [{ scale: scaleValue }] }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Icon style={styles.icon} name="facebook-square" />
        <Text>Entrar com o Facebook</Text>
      </AnimatedTouchableOpacity>
    </View>
  );
};
