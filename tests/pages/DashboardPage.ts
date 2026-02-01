import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly menuDashboard: Locator;
  readonly menuRecaudos: Locator;
  readonly menuPagos: Locator;

  constructor(page: Page) {
    this.page = page;

    const menuItems = page.locator('span.menu-label');

    this.menuDashboard = menuItems.filter({ hasText: 'Dashboard' });
    this.menuRecaudos = menuItems.filter({ hasText: 'Recaudos' });
    this.menuPagos = menuItems.filter({ hasText: 'Pagos' });
  }

  async validateSidebarMenu() {
    await expect(this.menuDashboard).toBeVisible();
    await expect(this.menuRecaudos).toBeVisible();
    await expect(this.menuPagos).toBeVisible();
  }
}
