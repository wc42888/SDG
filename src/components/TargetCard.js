import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NORMAL_SIZE} from '../config';

// eslint-disable-next-line react/prop-types
const TargetCards = ({target}) => {
  const {titleText, root} = styles;
  return (
    <View style={root}>
      <Text
        style={titleText}
        testID="content">{`${target.code}: ${target.title}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: NORMAL_SIZE,
    padding: 5,
  },
});

export default TargetCards;
