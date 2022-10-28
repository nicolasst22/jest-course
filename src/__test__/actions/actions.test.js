import actions from '../../actions/index';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('actions', () => {
  test('add to cart', () => {
    const payload = ProviderMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('remove from cart', () => {
    const payload = ProviderMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });

});

