import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
  loggedPage: import('@playwright/test').Page;
};

export const test = base.extend<MyFixtures>({
  loggedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(process.env.BASE_URL!);
    await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASS!);

    await use(page);
  },
});

export { expect };
