import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  let wrapped = shallow(<Checkbox />);
  it('should render the Checkbox Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('simulate checkbox', () => {
    expect(wrapped.find('input')).toHaveLength(1);
    wrapped.find('input').simulate('change', { target: { checked: true } });
    wrapped.update();
    expect(wrapped.find('input').props().checked).toBe(true);
  });
});
