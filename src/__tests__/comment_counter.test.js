import PopUp from '../modules/popUp.js';

test('The number of comments turkey should be 1', async () => {
  const country = 'turkey';
  const expected = 1;
  const result = PopUp.getComments(country);
  expect(result).toBe(expected);
});