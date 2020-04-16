import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {getAllGoals} from '../redux/actions';
import {LARGE_SIZE} from '../config';

const HomeScreen = () => {
  const {backgroundImage, content, title} = styles;
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goal);

  useEffect(() => {
    dispatch(getAllGoals());
  }, []);

  const getTitleText = () => `${goals.length} GOALS TO TRANSFORM OUR WORLD`;

  const renderTitle = () => <Text style={title}>{getTitleText()}</Text>;

  return (
    <ImageBackground
      // eslint-disable-next-line global-require
      source={require('../assets/images/sustain.jpg')}
      style={backgroundImage}>
      <ScrollView style={content}>{renderTitle()}</ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 400,
  },
  content: {
    paddingTop: 200,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: LARGE_SIZE,
    color: 'white',
  },
});

export default HomeScreen;
