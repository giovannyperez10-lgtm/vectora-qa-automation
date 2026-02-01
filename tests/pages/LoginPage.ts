import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly openLoginBtn: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Botón REAL que abre el login
    this.openLoginBtn = page.getByRole('button', { name: 'Log-in' });

    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async navigate(baseUrl: string) {
    await this.page.goto(baseUrl, { waitUntil: 'domcontentloaded' });

    await this.openLoginBtn.waitFor({ state: 'visible' });
    await this.openLoginBtn.click();

    await this.email.waitFor({ state: 'visible' });
  }

  async login(user: string, pass: string) {
    await this.email.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
    

  }
}
