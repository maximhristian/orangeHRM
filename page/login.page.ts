import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly inputErrorMessage: Locator;
  readonly invalidCredentialsAlert: Locator;
  readonly exclamationIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[name="username"]');
    this.passwordInput = page.locator('[name="password"]');
    this.loginButton = page.locator('[type="submit"]');
    this.forgotPasswordLink = page.locator(".orangehrm-login-forgot-header");
    this.inputErrorMessage = page.locator(".oxd-input-field-error-message");
    this.invalidCredentialsAlert = page.getByRole("alert");
    this.exclamationIcon = this.invalidCredentialsAlert.locator(".oxd-icon");
  }

  // async goto() {
  //     await this.page.goto('/');
  // }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async validateInputFieldsAreInvalid() {
    await expect(this.usernameInput).toContainClass("oxd-input--error");
    await expect(this.passwordInput).toContainClass("oxd-input--error");
  }
}
