import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {getAllGoals} from '../redux/actions';
import {LARGE_SIZE, goalName} from '../config';
import {GoalTile} from '../components';

const HomeScreen = () => {
  const {backgroundImage, content, title, activityIndicator} = styles;
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goal);
  const isLoadingGoals = useSelector((state) => state.loading.GET_GOALS);

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

  const renderContent = () =>
    isLoadingGoals ? (
      <View style={activityIndicator}>
        <ActivityIndicator size="large" color="black" />
        <Text size={LARGE_SIZE}>loading our goals</Text>
      </View>
    ) : (
      <>
        {renderTitle()}
        <ScrollView testID="content" style={content}>
          {renderGoalTiles()}
        </ScrollView>
      </>
    );

  return (
    <ImageBackground
      // eslint-disable-next-line global-require
      source={require('../assets/images/sustain.jpg')}
      style={backgroundImage}
      testID="backgroundImage">
      {renderContent()}
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
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
