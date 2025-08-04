import { test, expect } from '@playwright/test';
import { CookingClassPage } from '../pages/cookingClassPage';

test('Verify cooking class location', async ({ page }) => {
  const classPage = new CookingClassPage(page);

  // Navigate to a specific cooking class using its ID
  await classPage.navigateToClass('123'); // Replace '123' with the actual class ID for testing

  // Retrieve the displayed location of the cooking class
  const location = await classPage.getLocation();

  // Verify the location matches the expected value
  expect(location).toBe('Expected Location'); // Replace 'Expected Location' with the actual expected location
});
