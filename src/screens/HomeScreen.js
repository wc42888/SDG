import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {getAllGoals} from '../redux/actions';
import {LARGE_SIZE, goalName} from '../config';
import {GoalTile} from '../components';

const HomeScreen = () => {
  const {backgroundImage, content, title} = styles;
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goal);

  useEffect(() => {
    dispatch(getAllGoals());
  }, []);

  const getTitleText = () => `${goals.length} GOALS TO TRANSFORM OUR WORLD`;

  const renderTitle = () => <Text style={title}>{getTitleText()}</Text>;

  const findGoalName = (code) =>
    goalName.find((goalItem) => goalItem.code === code).name;

  const addGoalName = (goal) => ({...goal, name: findGoalName(goal.code)});

  const renderGoalTiles = () => (
    <View style={styles.goalsSection}>
      {goals.length
        ? goals.map((goal) => (
            <GoalTile
              key={goal.code}
              goal={addGoalName(goal)}
              disabled={goal.code !== '13'}
            />
          ))
        : null}
    </View>
  );

  return (
    <ImageBackground
      // eslint-disable-next-line global-require
      source={require('../assets/images/sustain.jpg')}
      style={backgroundImage}>
      {renderTitle()}
      <ScrollView style={content}>{renderGoalTiles()}</ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flexGrow: 1,
    width: '100%',
    height: 400,
  },
  content: {
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 200,
    fontSize: LARGE_SIZE,
    color: 'white',
  },
  goalsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
