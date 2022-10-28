import React from 'react';

import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Footer', () => {

  const footer = mount(<Footer />);
  test('Render footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('Comprobar render de footer', () => {
    const footer = renderer.create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});

