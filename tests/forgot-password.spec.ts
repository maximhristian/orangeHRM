import { test, expect } from "@playwright/test";
import { ForgotPasswordPage } from "../pages/forgot-password.page";
import { LoginPage } from "../pages/login.page";

test.describe("Forgot Password Page Tests", () => {
  let forgotPasswordPage: ForgotPasswordPage;
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    forgotPasswordPage = new ForgotPasswordPage(page);
    loginPage = new LoginPage(page);

    await page.goto("/");
    await loginPage.forgotPasswordLink.click();
  });

  test("Should be able to reset the password", async ({ page }) => {
    forgotPasswordPage.usernameInput.fill("username");
    await expect(forgotPasswordPage.resetButton).toHaveText("Reset Password");
    await forgotPasswordPage.resetButton.click();
    await page.waitForEvent("load");
    await page.waitForURL(/.*sendPasswordReset.*/);
  });
});
