import { chromium, FullConfig } from "@playwright/test";
import { getCredentials } from "./support/test-data.utls";

async function globalSetup(config: FullConfig) {
  getCredentials();
}

export default globalSetup;
