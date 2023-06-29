import Countries from '../modules/rest_countries.js';
import DOM from '../modules/DOM.js';

describe('Test the counter functions', () => {
  test('The amount all items should be 24', () => {
    // Arrange
    const countries = new Countries();
    // Act
    const counts = countries.getSelectedCountries();
    // Assert
    expect(counts).toHaveLength(24);
  });

  // Checks the number of likes to be greater or equal to be 0
  test('The number of all likes should be greater than or equal to 0', () => {
    expect(DOM.getLikes()).toBeGreaterThanOrEqual(0);
  });
});
