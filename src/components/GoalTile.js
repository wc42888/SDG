import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LARGE_SIZE} from '../config';

// eslint-disable-next-line react/prop-types
const GoalTile = ({goal, disabled = false}) => {
  const {
    container,
    content,
    goalNameContainer,
    goalCode,
    goalName: goalNameStyle,
    icon,
    disabled: disabledStyle,
  } = styles;

  const [tileAnimate] = useState(new Animated.Value(0.5));

  useEffect(() => {
    Animated.timing(tileAnimate, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bounce,
    }).start();
  }, []);

  const navigation = useNavigation();

  const navigateToTarget = () => navigation.navigate('Target', {goal});

  const getDisabledStyle = () => (disabled ? disabledStyle : {});

  const transformStyle = {
    transform: [{scale: tileAnimate}],
  };

  return (
    <TouchableOpacity
      style={[container, getDisabledStyle(), transformStyle]}
      onPress={navigateToTarget}
      disabled={disabled}>
      <Animated.View style={content}>
        <View style={goalNameContainer}>
          <Text style={goalCode} testID="goalCode">
            {goal.code}
          </Text>
          <Text style={goalNameStyle} testID="goalName">
            {goal.name}
          </Text>
        </View>
      </Animated.View>
      <View style={icon}>
        <Text>icon placeholder</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: 'rgba(32,39,44,0.5)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    elevation: 3,
  },
  content: {
    padding: 5,
  },
  goalNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalCode: {
    fontSize: LARGE_SIZE,
  },
  goalName: {
    marginLeft: 5,
    flex: 1,
    flexWrap: 'wrap',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: '#CCCCCC',
  },
});

export default GoalTile;
