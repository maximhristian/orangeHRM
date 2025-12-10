import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  if (!process.env.USERNAME || !process.env.PASSWORD) {
    throw new Error(
      "Username and Password environment variables are not set in the script",
    );
  }
}

export default globalSetup;
