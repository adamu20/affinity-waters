import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

describe('Movies', () => {
  let wrapped = shallow(<Movies />);
  it('should render the Movies Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    expect(wrapped.find('h1').text()).toEqual('🍿 Now playing');
  });

  it('should render the correct text if no movie', () => {
    expect(wrapped.find('.title').text()).toEqual('No movie showing now!');
  });

  // it('Submit form correctly with postCode', () => {
  //   const onChange = jest.fn();
  //   const mockHandleFunction = jest.fn();
  //   wrapped = <Movies onChange={onChange} mockHandleFunction={mockHandleFunction} />;
  //   wrapped.find('.listItem').simulate('change', { target: { checked: true } });
  //   wrapper.find('button').simulate('click');
  //   expect(onSubmit).toHaveBeenCalledWith('NE11EE');
  // });
});
