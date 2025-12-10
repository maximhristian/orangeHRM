import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ForgotPasswordPage extends BasePage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.usernameInput = page.locator('[name="username"]');
    this.resetButton = page.locator('[type="submit"]');
  }
}
