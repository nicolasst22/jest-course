import getData from '../../utils/getData';

describe('fetch get data', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('fetch data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://www.google.com').then((response) => {
      expect(response.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://www.google.com');
  });
});
