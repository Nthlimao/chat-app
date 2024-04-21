import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Pressable, StatusBar, View } from 'react-native';
import styles from './BackHeader.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

const BackHeader = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}): React.JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="#031D2E" />
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Svg viewBox="0 0 320 512" style={styles.icon}>
          <Path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            fill="#FFFFFF"
          />
        </Svg>
      </Pressable>
    </View>
  );
};

export default BackHeader;
