import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {getAllTargets} from '../redux/actions';
import {TargetCard} from '../components';

// eslint-disable-next-line react/prop-types
const TargetScreen = ({route}) => {
  const {root, emptyList} = styles;
  const {
    params: {goal},
  } = route;
  const dispatch = useDispatch();
  const targets = useSelector((state) => state.target);
  const isLoadingTargets = useSelector((state) => state.loading.GET_TARGETS);

  const fetchTargets = () => dispatch(getAllTargets(goal.code));

  useEffect(() => {
    fetchTargets();
  }, []);

  const keyExtractor = (item) => item.code;

  // eslint-disable-next-line react/prop-types
  const renderItem = ({item}) => {
    return <TargetCard target={item} />;
  };

  const ListEmptyComponent = () => (
    <View style={emptyList}>
      <Text>No target information available, please try to refresh</Text>
    </View>
  );

  return (
    <View style={root}>
      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        data={targets}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        refreshing={isLoadingTargets}
        onRefresh={fetchTargets}
        testID="targetList"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TargetScreen;
