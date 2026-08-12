import { leapwork } from "./leapwork";

// ai-studio-step-id: zfxIx1e0
await leapwork.step("Validate navigation to https://leapwork.com", async () => {
    await page.goto('https://leapwork.com');
});

// ai-studio-step-id: Z6Lrl5H6
await leapwork.step("Click the Accept all button on the Leapwork homepage", async () => {
    const acceptAllButton = page.getByRole('button', { name: 'Accept all', exact: true });
    await expect(acceptAllButton).toHaveCount(1);
    await acceptAllButton.click({ force: true });
}, { relativeXpath: "//*[@id=\"onetrust-accept-btn-handler\"]" });

// ai-studio-step-id: fObnFfMR
await leapwork.step("Click the BOOK A DEMO link on the Leapwork homepage", async () => {
    const locator = page.locator(`xpath=.//div[1]/div/div/div[3]/div[3]/a`).first();
    await locator.waitFor({ state: 'visible', timeout: 5000 });
    await locator.click();
}, { relativeXpath: ".//div[1]/div/div/div[3]/div[3]/a" });
