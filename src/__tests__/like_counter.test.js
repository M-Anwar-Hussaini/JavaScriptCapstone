import Countries from '../modules/rest_countries.js';
import DOM from '../modules/DOM.js';

const countries = new Countries();

describe('Test the counter functions', () => {
  test('The amount all items should be 24', () => {
    // Assert
    const counts = countries.getSelectedCountries();
    expect(counts).toHaveLength(24);
  });
});
