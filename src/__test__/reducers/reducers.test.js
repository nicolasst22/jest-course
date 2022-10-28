import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('reducers', () => {
  test('retornar estado inicial', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('add to cart', () => {
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer({ cart: [] }, action)).toEqual(expected);
  });

});
