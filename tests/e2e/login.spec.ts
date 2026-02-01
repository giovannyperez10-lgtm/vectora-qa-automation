import { test, expect } from '../fixtures/testFixtures';

test('User can log into Vectora platform', async ({ loggedPage }) => {
  await expect(loggedPage).toHaveURL(/dashboard|home|panel/);
});
