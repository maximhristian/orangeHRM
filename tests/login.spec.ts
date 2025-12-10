import { test, expect, Locator } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { getCredentials } from "../support/test-data.utls";
import { ErrorMessages } from "../enums/error-messages";

test.describe("Login Page Tests", () => {
  let loginpage: LoginPage;
  const creds = getCredentials();

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    loginpage = new LoginPage(page);
  });

  test("Should login successfully with valid credentials", async () => {
    await loginpage.login(creds.username, creds.password);
    await expect(loginpage.page).toHaveURL(/.*dashboard.*/);
  });

  test("Should not login with invalid credentials", async () => {
    await loginpage.login("invalidUser", "invalidPass");

    await expect(loginpage.invalidCredentialsAlert).toBeVisible();
    await expect(loginpage.invalidCredentialsAlert).toHaveText(
      "Invalid credentials",
    );
    await expect(loginpage.exclamationIcon).toBeVisible();
  });

  test("Should show validation errors when fields are empty", async () => {
    await loginpage.login("", "");

    await loginpage.validateInputFieldsAreInvalid();
    const errorMessages = await loginpage.inputErrorMessage.all();

    //Expect to get 2 erorr messages
    expect(errorMessages.length).toBe(2);
    for (const message of errorMessages) {
      await expect(message).toHaveText(ErrorMessages.REQUIRED);
    }
  });

  test("Forget Password Link Should Route To Forget Password Page", async () => {
    await expect(loginpage.forgotPasswordLink).toHaveText(
      "Forgot your password?",
    );
    await loginpage.forgotPasswordLink.click();
    await expect(loginpage.page).toHaveURL(/.*requestPasswordResetCode.*/);
  });
});
