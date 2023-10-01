import { Pressable, Text } from 'react-native';
import { Styles } from './Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const SeeMore = (props: { text: string }) => {
  return (
    <Pressable style={Styles.section.seeMore}>
      <Text style={Styles.section.seeMoreLabel}>{props.text}</Text>
      <MaterialIcons name="arrow-forward-ios" size={16} color="white" />
    </Pressable>
  );
};

export default SeeMore;
