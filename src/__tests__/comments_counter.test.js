import PopUp from '../modules/popUp.js';

describe('countComments', () => {
  test('The number of comments turkey should be 1', async () => {
    const country = 'turkey';
    const expected = 1;
    const result = PopUp.getComments(country);
    expect(result).toBe(expected);
  });

  test('The number of comments for colombia should be 24', async () => {
    const country = 'colombia';
    const expected = 6;
    const result = PopUp.getComments(country);
    expect(result).toBe(expected);
  });

  test('The number of comments for colombia should be 24', async () => {
    const country = 'germany';
    const expected = 6;
    const result = PopUp.getComments(country);
    expect(result).not.toBe(expected);
  });
});