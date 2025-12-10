import { Locator, Page } from "@playwright/test";

export class ForgotPasswordPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly resetButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[name="username"]');
        this.resetButton = page.locator('[type="submit"]');
    }
}   