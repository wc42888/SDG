import React from 'react';
import {mount} from 'enzyme';
import GoalTile from './GoalTile';

describe('test GoalTile component', () => {
  let goalTile;
  const goalName = 'goalName';
  const goalCode = '1';
  const goal = {code: goalCode};

  beforeEach(() => {
    goalTile = mount(<GoalTile goalName={goalName} goal={goal} />);
  });

  it('should render correct goal code text', () => {
    const goalCodeText = goalTile
      .findWhere((node) => node.prop('testID') === 'goalCode')
      .first()
      .text();
    expect(goalCodeText).toBe(goalCode);
  });

  it('should render correct goal name text', () => {
    const goalNameText = goalTile
      .findWhere((node) => node.prop('testID') === 'goalName')
      .first()
      .text();
    expect(goalNameText).toBe(goalName);
  });
});
