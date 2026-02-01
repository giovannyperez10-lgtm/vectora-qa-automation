import { test } from '../fixtures/testFixtures';
import { DashboardPage } from '../pages/DashboardPage';

test('Dashboard loads with correct menu and logged user', async ({ loggedPage }) => {
  const dashboard = new DashboardPage(loggedPage);

  await dashboard.validateSidebarMenu();
});
