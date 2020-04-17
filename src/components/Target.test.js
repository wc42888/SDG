import React from 'react';
import {mount} from 'enzyme';
import TargetCard from './TargetCard';

describe('test TargetCard component', () => {
  let targetCard;
  const targetCode = 'targetCode';
  const targetTitle = 'targetTitle';
  const target = {code: targetCode, title: targetTitle};

  beforeEach(() => {
    targetCard = mount(<TargetCard target={target} />);
  });

  it('should render correct text including target code and target title', () => {
    const content = targetCard
      .findWhere((node) => node.prop('testID') === 'content')
      .first()
      .text();
    expect(content).toBe(`${targetCode}: ${targetTitle}`);
  });
});
