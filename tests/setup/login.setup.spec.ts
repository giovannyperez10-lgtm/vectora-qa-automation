import { test } from '@playwright/test';

test('login and save session', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  await page.getByRole('button', { name: 'Log-in' }).click();
  await page.locator('#email').fill(process.env.USER_EMAIL!);
  await page.locator('#password').fill(process.env.USER_PASS!);
  await page.getByRole('button', { name: /login|iniciar/i }).click();

  // 🔥 ESPERAR A QUE EL LOGIN SEA REAL
  await page.waitForURL(/dashboard|home|panel/, { timeout: 20000 });

  // 🔥 Esperar que token exista (CLAVE para Cognito)
  await page.waitForFunction(() => {
    return localStorage.length > 0;
  });

  // 🔥 AHORA sí guardar sesión
  await page.context().storageState({ path: 'storageState.json' });
});
