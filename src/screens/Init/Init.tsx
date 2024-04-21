import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './Init.styles';

interface InitProps {
  navigation: any;
}

const Init = ({ navigation }: InitProps): React.JSX.Element => {
  const image = require('../../assets/images/default_bg.jpg');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#54808B" />
      <View style={styles.init}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.background}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome,</Text>
            <Text style={styles.subtitle}>
              It's easy communicate with family and friends.
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.footer}>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.singupBtn,
              pressed && styles.pressed,
            ]}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Init;
