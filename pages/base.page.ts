import { Page } from "@playwright/test";

/**
 * This is a base page class that other page classes can extend from.
 * It contains common properties and methods that can be shared across different pages.
 */
export abstract class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
